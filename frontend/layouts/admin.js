import Sidebar from "../components/dashboard/sidebar";
import {
    FaUsers,
    FaWrench,
    FaReact,
    FaUser,
    FaList,
    FaTools,
} from "react-icons/fa";
import {
    MdElectricBike,
    MdLocalTaxi,
    MdStars,
    MdPermDataSetting,
    MdSettingsPhone,
} from "react-icons/md";
import {useEffect, useState} from "react";
import {fetchProfile} from "../helpers/backend_helper";
import {useRouter} from "next/router";
import UserContext from "../contexts/user";
import I18nContext, {initI18n} from "../contexts/i18n";
import Header from "../components/dashboard/header";
import {BsFileEarmarkBinary} from "react-icons/bs";
import {TbBrandBootstrap, TbPackage} from "react-icons/tb";
import {BiCategory, BiDollar, BiDollarCircle} from "react-icons/bi";
import {ImCancelCircle, ImLocation2} from "react-icons/im";
import {VscSettings} from "react-icons/vsc";
import {
    AiFillCar,
    AiOutlineFile,
} from "react-icons/ai";
import {Loader} from "../components/common/preloader";
import {RiChatSettingsLine,RiMailSettingsFill, RiSettings6Fill} from "react-icons/ri";
import {useUserDataContext} from "../contexts/userDataContext";
import {IoPush} from "react-icons/io5";


const AdminLayout = ({children}) => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const i18n = initI18n()
    const {isLoggedIn} = useUserDataContext()

    useEffect(() => {
        getProfile()
    }, [isLoggedIn])

    const getProfile = () => {
        fetchProfile().then(({error, data}) => {
            if (error === false && (data?.role === "admin" || data?.role === "employee")) {
                setUser({...data})
            } else {
                localStorage.removeItem("authToken")
                router.push('/login')
            }
        })
    }

    const menu = getMenu(user)
    if (user === null) {
        return (<div className="loader block">
            <Loader />
        </div>)
    }

    return (
        <I18nContext.Provider value={i18n}>
            <UserContext.Provider value={{...user, getProfile}}>
                <div className="dashboard relative">
                    <Sidebar menu={menu} />
                    <Header />
                    <div className="fixed top-0 h-16 z-10 w-full bg-white" />
                    <div className="main-content">
                        <div className="w-full sm:p-5 z-0" style={{minHeight: 400}}>
                            {children}
                        </div>
                    </div>
                </div>
            </UserContext.Provider>
        </I18nContext.Provider>
    )
}
export default AdminLayout

const menu = [
    {
        label: 'Service Management',
        icon: FaReact,
        child: [
            {
                label: 'Category',
                icon: BiCategory,
                href: '/admin/services/category',
                childHrefs: ['/admin/services/category', "/admin/services/category/[_id]"],
                permissions: ['admin', 'service_category_show'],
            },
            {
                label: 'Packages',
                icon: TbPackage,
                href: '/admin/services/packages',
                childHrefs: ['/admin/services/packages/add', "/admin/services/packages/[_id]"],
                permissions: ['admin', 'service_package_show'],
            },
            
            
        ]
    },
    {
        label: 'User Management',
        icon: FaUsers,
        child: [
            {
                label: 'User List',
                icon: FaUsers,
                href: '/admin/user',
                childHrefs: ['/admin/user/user-details'],
                permissions: ['admin', 'user_list_show'],
            },
            {
                label: 'Payment Records',
                icon: BsFileEarmarkBinary,
                href: '/admin/user/payment-records',
                childHrefs: ['/admin/user/payment-records'],
                permissions: ['admin', 'user_payment_record_show'],

            },
        ]
    },
    {
        label: 'Driver Management',
        icon: FaUser,
        child: [
            {
                label: 'Driver List',
                icon: FaUsers,
                href: '/admin/driver/approved-list',
                childHrefs: ['/admin/driver/approved-list/add', "/admin/driver/approved-list/[_id]"],
                permissions: ['admin', 'driver_list_show'],
            },
            {
                label: 'Vehicle List',
                icon: MdElectricBike,
                href: '/admin/driver/vehicles',
                permissions: ['admin', 'driver_vehicle_list_show'],
            },
            
        ]
    },
    {
        label: 'Trip Management',
        icon: MdLocalTaxi,
        child: [
            {
                label: 'Trips',
                icon: FaList,
                href: '/admin/trip-management/trips',
                childHrefs: ['/admin/trip-management/trips/', "/admin/trip-management/trips/[_id]"],
                permissions: ['admin', 'trips_show'],
            },
            
        ]
    },
    
]

const getMenu = user => {
    const router = useRouter()
    const hasPermission = menu => {
        if (menu.permission && havePermission(menu.permission, user?.permission)) {
            return true
        }
        if (menu.permissions) {
            for (let permission of menu.permissions) {
                if (havePermission(permission, user?.permission)) {
                    return true
                }
            }
        }
        if (menu.permissions) {
            for (let permission of menu.permissions) {
                if (roleWisePermission(permission, [user?.role])) {
                    return true
                }
            }
        }
        if (process.browser) {
            if (router?.pathname === menu.href && user) {
                router?.push('/').then(() => {
                })
            }
        }
        return false
    }
    return menu?.map(d => ({...d, href: d.href?.replace('[_id]', user?._id)})).filter(menu => {
        if (+user?.profile?.is_owner === 1) {
            return true
        } else if (menu?.permission === 'any' || menu?.permission === 'admin') {
            return true
        } else if (menu.permission || menu.permissions) {
            return hasPermission(menu)
        } else if (Array.isArray(menu.child)) {
            menu.child = menu.child.filter(child => {
                return hasPermission(child)
            })
            return menu.child.length > 0
        }
        return false
    })
}

export const havePermission = (permission, roles) => {
    for (let role of roles || []) {
        if (role?.permissions?.includes(permission)) {
            return true
        }
    }
    return false
}

export const roleWisePermission = (permission, roles) => {
    if (roles?.includes(permission)) {
        return true
    }
    return false
}