import AdminLayout from "../../../layouts/admin";
import PageTitle from "../../../components/common/page-title";
import {Form, Tabs} from "antd";
import React, {useEffect, useState} from "react";
import {useI18n} from "../../../contexts/i18n";
import { useFetch} from "../../../helpers/hooks";
import {fetchSettings} from "../../../helpers/backend_helper";
import StripePaymentMethod from "../../../components/admin/payment-methods/stripe";

const PaymentSettings = () => {
    const i18n = useI18n()
    const [form] = Form.useForm()
    const [settings, getSettings] = useFetch(fetchSettings)
    const [logo, setLogo] = useState('/img/shops.png')

    useEffect(() => {
        if (settings) {
            form.setFieldsValue({
                ...settings,
                logo: undefined,
            })
            setLogo(settings?.logo || '/img/shops.png')
        }
    }, [settings])

    return (
        <>
            <PageTitle title={!!i18n && i18n?.t("Payment Settings")} />
            <div className={'bg-white p-4 rounded'}>
                <Tabs type="card" defaultActiveKey="1" centered>
                    {/* Stripe payment method */}
                    <Tabs.TabPane tab="Stripe" key="1">
                        <StripePaymentMethod/>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>
    )
}

PaymentSettings.layout = AdminLayout
export default PaymentSettings
