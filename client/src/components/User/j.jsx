
import React, { useState, useEffect } from 'react';
import { Button, message, Steps, theme, Radio, Input, Select, } from 'antd';
import '../cardeffect.css'
import generateYears from '../../data/caryear.js'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';

const steps = [
    {
        title: 'Your car',
        content: 'hi',
    },
    {
        title: 'Car availibility',
        content: 'Last-content',
    },
    {
        title: 'Car details',
        content: 'Last-content',
    },
    {
        title: 'Car photos',
        content: 'Last-content',
    },
    {
        title: 'Submit your listing',
        content: 'Last-content',
    },
];
const Steppers = () => {
    const { token } = theme.useToken();
    const [current, setCurrent] = useState(0);
    const next = () => {
        form.validateFields().then(() => {
            setCurrent(current + 1);
        }).catch((errorInfo) => {
            console.log('Validation failed:', errorInfo);
        });
    };
    const [form] = Form.useForm();
    const [clientReady, setClientReady] = useState(false);

    // To disable submit button at the beginning.
    useEffect(() => {
        setClientReady(true);
    }, []);
    const onFinish = (values) => {
        console.log('Finish:', values);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    const contentStyle = {
        height: 'fit-content',
        color: token.colorTextTertiary,
        border: `1px dashed ${token.colorBorder}`,
        marginTop: 16,
        padding: 10,
    };
    const caryear = generateYears()
    return (
        <>
            <Steps current={current} items={items} />
            <Form form={form} name="horizontal_login" layout="inline" onFinish={onFinish}>
                {(current === 0 &&
                    <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
                        <div className='content-your-car '>
                            {/* <div className='flex flex-col mb-3'>
                                                    <label htmlFor="">Location of car</label>
                                                    <Input type="text" placeholder='Enter your location' className='w-[450px] p-2 border-[1px] rounded-none' required/>
                                                    </div>
                                                    <div className='grid grid-cols-3 gap-3 mb-3'>
                                                    <div className='flex flex-col'>
                                                        <label htmlFor="">Car year</label>
                                                        <Select placeholder="select" className='rounded-[0px]'>
                                                        {caryear.map((year, index) => (
                                                            <Option key={index} required>{year}</Option>
                                                        ))}
                                                        </Select>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <label htmlFor="">Car model</label>
                                                        <Input type="text" className='rounded-[0px]' required/>
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <label htmlFor="">Car make</label>
                                                        <Input type="text" className='rounded-[0px]' required/>
                                                    </div>
                                                    </div>
                                                    <div className='flex flex-col w-[270px] mb-3'>
                                                    <label htmlFor="">Distance</label>
                                                    <Select placeholder="select">
                                                        {caryear.map((year, index) => (
                                                        <Option key={index} required>{year}</Option>
                                                        ))}
                                                    </Select>
                                                    </div>
                                                    <div className='flex flex-col w-[270px] '>
                                                    <label htmlFor="">Transition</label>
                                                    <Radio.Group>
                                                        <Radio value={1} required>Manual</Radio>
                                                        <Radio value={2} required>Automatic</Radio>
                                                    </Radio.Group>
                                                    </div> */}
                            <div className='flex flex-col gap-3' >
                                <div>
                                    <label htmlFor=""> location</label>
                                    <Form.Item
                                        className='w-[400px]'
                                        name="location"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your car location!',
                                            },
                                        ]}
                                    >
                                        <Input placeholder="Your car location" className='rounded-[0px] ' />
                                    </Form.Item>
                                </div>
                                <div className='year-model-make grid grid-cols-3'>
                                    <div>
                                        <label htmlFor="caryear">Year</label>
                                        <Form.Item
                                            name="caryear"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="select year">
                                                {caryear.map((year, index) => (
                                                    <Option key={index} required>{year}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <label htmlFor="carmake"> Make</label>
                                        <Form.Item
                                            name="carmake"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Make">
                                                {caryear.map((year, index) => (
                                                    <Option key={index} required>{year}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <label htmlFor="carmodel">Model</label>
                                        <Form.Item
                                            name="carmodel"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Model">
                                                {caryear.map((year, index) => (
                                                    <Option key={index} required>{year}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className='w-[260px]'>
                                    <div>
                                        <label htmlFor="destination">Distance</label>
                                        <Form.Item
                                            name="destination"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="Model" className='mb-4'>
                                                {caryear.map((year, index) => (
                                                    <Option key={index} required>{year}</Option>
                                                ))}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                    {/* <div>
                                                                    <label htmlFor="Transition">Transition</label>
                                                                    <Form.Item
                                                                    name="Transition"
                                                                    rules={[
                                                                        {
                                                                        required: true,
                                                                        message: 'Please input your username!',
                                                                        },
                                                                    ]}
                                                                    >
                                                                    <Radio.Group >
                                                                        <Radio value={1} required checked="true">Manual</Radio>
                                                                        <Radio value={2} required>Automatic</Radio>
                                                                    </Radio.Group>
                                                                    </Form.Item>
                                                                </div> */}
                                </div>
                            </div>
                        </div>


                    </div>)
                    ||
                    (current === 1 &&
                        <div style={contentStyle} className='flex flex-col justify-center w-[95%]'>
                            <div className='content-your-car '>
                                <div className='flex flex-col gap-3' >
                                    <p>What’s the shortest and longest possible trip you’ll accept?</p>
                                    <div>
                                        <label htmlFor=""> Minimum trip duration</label>
                                        <Form.Item
                                            className='w-[400px]'
                                            name="min"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Select placeholder="select number of days">
                                                <Option value={1} key={1} >1</Option>
                                                <Option value={2} key={2} >2</Option>
                                                <Option value={3} key={3} >3</Option>
                                            </Select>
                                        </Form.Item>
                                    </div>
                                    <div>
                                        <label htmlFor=""> Maximum trip duration</label>
                                        <Form.Item
                                            className='w-[400px]'
                                            name="max"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your username!',
                                                },
                                            ]}
                                        >
                                            <Input placeholder="Your car location" className='rounded-[0px] ' />
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>


                        </div>)
                    ||
                    (current === 2 && <div style={contentStyle}>hello 2</div>)
                    ||
                    (current === 3 && <div style={contentStyle}>Hello 3</div>)
                    ||
                    (current === 4 && <div style={contentStyle}>Hello 5</div>)}

                    <div style={{ marginTop: 24 }}>
                        {current > 0 && (
                            <Button style={{ margin: '0 8px' }} onClick={prev}>
                                Previous
                            </Button>
                        )}
                        {current < steps.length - 1 && (
                            <Button type="primary" onClick={() => next()} cla>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button type="primary" htmlType="submit">
                                Done
                            </Button>
                        )}
                    </div>
            </Form>
        </>
    );
};
export default Steppers;



