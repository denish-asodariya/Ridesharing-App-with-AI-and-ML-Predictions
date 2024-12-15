import {Router} from "express";
import userRoutes from "./api/user.routes";
import roleRoutes from "./api/role.routes";
import settings from "./api/settings.routes";
import frontendRoutes from './api/frontend.routes';
import vehicleRoutes from "./api/vehicle.routes";
import serviceCategoryRoutes from './api/service.routes'
import fileRoutes from './api/files.routes'
import formFields from "./api/form_fields.routes";
import userFormFields from "./api/user_form_field.routes";
import applications from "./api/applications.routes";
import servicePriceRoutes from './api/service_price.routes'
import locationRoutes from './api/location.routes'
import pageRoutes from "./api/page.routes";
import bookingRoutes from "./api/booking.routes";
import tripRequestRoutes from "./api/trip_request.routes";
import paymentRoutes from "./api/payment.routes";
import departmentRoutes from "./api/department.routes";
import walletRoutes from "./api/wallet.routes";
import userFeedbackRoutes from "./api/user_feedback.routes";
import chattingRoutes from "./api/chatting.routes";
import savedAddressRoutes from "./api/saved_address.routes";


const apiRouters = Router();
apiRouters.use('/user', userRoutes);
apiRouters.use('/role', roleRoutes);
apiRouters.use('/settings', settings);
apiRouters.use('/frontend', frontendRoutes);
apiRouters.use('/page', pageRoutes);
apiRouters.use('/vehicle', vehicleRoutes);
apiRouters.use('/service', serviceCategoryRoutes);
apiRouters.use('/file', fileRoutes);
apiRouters.use('/form-field', formFields);
apiRouters.use('/user-form-field', userFormFields);
apiRouters.use('/application', applications);
apiRouters.use('/service-price', servicePriceRoutes);
apiRouters.use('/location', locationRoutes);
apiRouters.use('/booking', bookingRoutes);
apiRouters.use('/trip', tripRequestRoutes);
apiRouters.use('/payment', paymentRoutes);
apiRouters.use('/department', departmentRoutes);
apiRouters.use('/department', departmentRoutes);
apiRouters.use('/wallet', walletRoutes);
apiRouters.use('/user-feedback', userFeedbackRoutes);
apiRouters.use('/chatting', chattingRoutes);
apiRouters.use('/saved-address', savedAddressRoutes);


module.exports = apiRouters;

