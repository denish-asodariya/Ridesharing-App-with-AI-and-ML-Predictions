import {Form, message, Switch} from 'antd';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, {useEffect, useState} from 'react';
import Button from '../../../../components/common/button';
import Table from '../../../../components/common/table';
import { useSite } from '../../../../contexts/site';
import {
    delServiceLocation,
    fetchServiceLocations,
    postServiceLocation, postSettings,
} from '../../../../helpers/backend_helper';
import { useAction, useFetch } from '../../../../helpers/hooks';
import AdminLayout from "../../../../layouts/admin";
import Card from '../../../../components/common/card';
import { initI18n } from '../../../../contexts/i18n';
import FormInput from "../../../../components/form/input";


const LocationService = () => {
    const site = useSite();
    const i18n = initI18n();
    const [form] = Form.useForm();

    useEffect(() => {
        if(!!site?.max_distance || site.max_distance === 0) {
            form.setFieldsValue({max_distance: site?.max_distance})
        }
    }, [site?.max_distance]);

    return (
        <section>
            <Head>
                <title>Locations</title>
            </Head>
            <Card className={'shadow-sm text-font_color font-semibold'}>
                <h1 className=''>
                    {!!i18n && i18n?.t("Service Location List")}
                </h1>
            </Card>
            <Card className={'shadow-sm text-font_color font-semibold'}>
                <Form
                    form={form}
                    onFinish={async (values) => {
                        return useAction(postSettings, values, () => {getLocations()})
                    }}
                    layout={'vertical'}
                >
                    <FormInput
                        name={'max_distance'}
                        label={!!i18n && i18n?.t('The maximum search distance from the user (in meters)')}
                        required
                        placeholder={!!i18n && i18n?.t('Please enter maximum distance')}
                        type={'number'}
                        extra={'Set 0 (zero) to remove search limitations' }
                    />

                    <Button>Submit</Button>
                </Form>
            </Card>
        </section>
    );
};
LocationService.layout = AdminLayout;
export default LocationService;