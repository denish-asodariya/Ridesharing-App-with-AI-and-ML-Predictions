import AdminLayout from "../../../layouts/admin";
import PageTitle from "../../../components/common/page-title";
import { Tabs} from "antd";
import React from "react";
import {useI18n} from "../../../contexts/i18n";
import SendGridManageEmail from "../../../components/admin/email/sendGrid";
import GmailEmailProvider from "../../../components/admin/email/gmailProvider";
import OtherProviderManageEmail from "../../../components/admin/email/otherEmailProvider";

const EmailSettings = () => {
    const i18n = useI18n()
    return (
        <>
            <PageTitle title={!!i18n && i18n?.t("Email Settings")} />
            <div className={'bg-white p-4 rounded'}>
                <Tabs defaultActiveKey="1" centered type="card">
                    Other's Provider
                    <Tabs.TabPane tab={!!i18n && i18n?.t("Gmail Provider")} key="2">
                        <GmailEmailProvider/>
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </>

    )
}

EmailSettings.layout = AdminLayout
export default EmailSettings
