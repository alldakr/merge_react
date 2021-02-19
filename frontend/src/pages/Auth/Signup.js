import React, { useEffect, useState } from 'react';
import { axiosInstance, useAxios } from 'api';
// import { Form, Input, Button, notification } from 'antd';
import { notification } from 'antd';
// import { SmileOutlined, FrownOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

// export default function Signup() {
//     const history = useHistory();
//     const [fieldErrors, setFieldErrors] = useState({});

//     const onFinish = (values) => {
//         async function fn() {
//             const { username, password } = values;

//             setFieldErrors({});

//             const data = { username, password };
//             try {
//                 await axiosInstance.post('/accounts/signup/', data);
//                 notification.open({
//                     message: '회원가입 성공',
//                     description: '로그인 페이지로 이동합니다.',
//                     icon: <SmileOutlined style={{ color: '##108ee9' }} />,
//                 });
//                 history.push('/login');
//             } catch (error) {
//                 if (error.response) {
//                     notification.open({
//                         message: '회원가입 실패',
//                         description: '아이디/암호를 확인해주세요.',
//                         icon: <FrownOutlined style={{ color: '#ff3333' }} />,
//                     });

//                     const { data: fieldsErrorMessage } = error.response;
//                     setFieldErrors(
//                         Object.entries(fieldsErrorMessage).reduce(
//                             (acc, [fieldName, errors]) => {
//                                 acc[fieldName] = {
//                                     validateStatus: 'error',
//                                     help: errors.join(' '),
//                                 };
//                                 return acc;
//                             },
//                             {}
//                         )
//                     );
//                 }
//             }
//         }
//         fn();
//     };

//     return (
//         <div>
//             <Form
//                 {...layout}
//                 onFinish={onFinish}
//                 // onFinishFailed={onFinishFailed}
//             >
//                 <Form.Item
//                     label='Username'
//                     name='username'
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your username!',
//                         },
//                         {
//                             min: 5,
//                             message: '5글자 입력해주세요',
//                         },
//                     ]}
//                     hasFeedback
//                     {...fieldErrors.username}>
//                     <Input />
//                 </Form.Item>

//                 <Form.Item
//                     label='Password'
//                     name='password'
//                     rules={[
//                         {
//                             required: true,
//                             message: 'Please input your password!',
//                         },
//                     ]}
//                     {...fieldErrors.password}>
//                     <Input.Password />
//                 </Form.Item>

//                 <Form.Item {...tailLayout}>
//                     <Button type='primary' htmlType='submit'>
//                         Submit
//                     </Button>
//                 </Form.Item>
//             </Form>{' '}
//         </div>
//     );
// }

// const layout = {
//     labelCol: {
//         span: 8,
//     },
//     wrapperCol: {
//         span: 16,
//     },
// };

// const tailLayout = {
//     wrapperCol: {
//         offset: 8,
//         span: 16,
//     },
// };
// ==========================================================================================
// import React from 'react';
// nodejs library that concatenates classes
import classnames from 'classnames';
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
} from 'reactstrap';
// core components
// import AuthHeader from "components/Headers/AuthHeader.js";
import ModalDefault from 'components/argon-design/modals/ModalDefault.js';

import imgA from 'assets/argon-dashboard/img/icons/common/github.svg';
import imgB from 'assets/argon-dashboard/img/icons/common/google.svg';

function Register() {
    const history = useHistory();
    const [fieldErrors, setFieldErrors] = useState({});

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRePassword] = useState('');
    const [email, setEmail] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const [focusedName, setfocusedName] = useState(false);
    const [focusedEmail, setfocusedEmail] = useState(false);
    const [focusedPassword, setfocusedPassword] = useState(false);
    const [focusedRePassword, setfocusedRePassword] = useState(false);

    const [emailGuide, setEmailGuide] = useState(false);

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
        } else if (e.target.name === 'password') {
            setPassword(e.target.value);
        } else if (e.target.name === 'email') {
            setEmail(e.target.value);
        } else if (e.target.name === 'repassword') {
            setRePassword(e.target.value);
        } else if (e.target.name === 'customCheckRegister') {
            setCheckbox(!checkbox);
        }
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        async function fn() {
            const data = {
                username: username,
                password: password,
                email: email,
            };

            setFieldErrors({});
            try {
                await axiosInstance.post('/accounts/signup/', data);
                notification.open({
                    message: '회원가입 성공',
                    description: '로그인 페이지로 이동합니다.',
                });
                history.push('/login');
            } catch (error) {
                if (error.response) {
                    notification.open({
                        message: '회원가입 실패',
                        description: '아이디/암호를 확인해주세요.',
                    });
                    const { data: fieldsErrorMessage } = error.response;
                    setFieldErrors(
                        Object.entries(fieldsErrorMessage).reduce(
                            (acc, [fieldName, errors]) => {
                                acc[fieldName] = {
                                    validateStatus: 'error',
                                    help: errors.join(' '),
                                };
                                return acc;
                            },
                            {}
                        )
                    );
                }
            }
        }
        fn();
    };

    const handleEmailGuide = (e) => {
        setEmailGuide(!emailGuide);
    };

    return (
        <>
            <Container className='pb-3' style={{ marginTop: '100px' }}>
                <Row className='justify-content-center'>
                    <Col lg='6' md='8'>
                        <Card className='bg-secondary border-0'>
                            <CardHeader className='bg-transparent pb-5'>
                                <div className='text-muted text-center mt-2 mb-4'>
                                    <small>Sign up with</small>
                                </div>
                                <div className='text-center'>
                                    <Button
                                        className='btn-neutral btn-icon mr-4'
                                        color='default'
                                        href='#pablo'
                                        onClick={(e) => e.preventDefault()}>
                                        <span className='btn-inner--icon mr-1'>
                                            <img alt='...' src={imgA} />
                                        </span>
                                        <span className='btn-inner--text'>
                                            Github
                                        </span>
                                    </Button>
                                    <Button
                                        className='btn-neutral btn-icon'
                                        color='default'
                                        href='#pablo'
                                        onClick={(e) => e.preventDefault()}>
                                        <span className='btn-inner--icon mr-1'>
                                            <img alt='...' src={imgB} />
                                        </span>
                                        <span className='btn-inner--text'>
                                            Google
                                        </span>
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody className='px-lg-5 py-lg-5'>
                                <div className='text-center text-muted mb-4'>
                                    <small>Or sign up with credentials</small>
                                </div>
                                <Form role='form'>
                                    <FormGroup
                                        className={classnames({
                                            focused: focusedName,
                                        })}>
                                        <InputGroup className='input-group-merge input-group-alternative mb-3'>
                                            <InputGroupAddon addonType='prepend'>
                                                <InputGroupText>
                                                    <i className='ni ni-hat-3' />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder='Name'
                                                type='text'
                                                name='username'
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setfocusedName(true)
                                                }
                                                onBlur={() =>
                                                    setfocusedName(false)
                                                }
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                            focused: focusedEmail,
                                        })}>
                                        <InputGroup className='input-group-merge input-group-alternative mb-3'>
                                            <InputGroupAddon addonType='prepend'>
                                                <InputGroupText>
                                                    <i className='ni ni-email-83' />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder='Email'
                                                type='email'
                                                name='email'
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setfocusedEmail(true)
                                                }
                                                onBlur={() =>
                                                    setfocusedEmail(false)
                                                }
                                            />
                                            <InputGroupAddon addonType='append'>
                                                <Button
                                                    className='btn-icon btn-3'
                                                    color='primary'
                                                    type='button'
                                                    name='emailGuide'
                                                    onClick={handleEmailGuide}>
                                                    이메일 인증
                                                </Button>
                                            </InputGroupAddon>
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                            focused: focusedPassword,
                                        })}>
                                        <InputGroup className='input-group-merge input-group-alternative'>
                                            <InputGroupAddon addonType='prepend'>
                                                <InputGroupText>
                                                    <i className='ni ni-lock-circle-open' />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder='Password'
                                                type='password'
                                                name='password'
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setfocusedPassword(true)
                                                }
                                                onBlur={() =>
                                                    setfocusedPassword(false)
                                                }
                                            />
                                        </InputGroup>
                                        {password !== repassword && (
                                            <div className='text-muted font-italic'>
                                                <small>
                                                    <span className='text-success font-weight-700'>
                                                        Password and RePassword
                                                        are incorrect
                                                    </span>
                                                </small>
                                            </div>
                                        )}
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                            focused: focusedRePassword,
                                        })}>
                                        <InputGroup className='input-group-merge input-group-alternative'>
                                            <InputGroupAddon addonType='prepend'>
                                                <InputGroupText>
                                                    <i className='ni ni-lock-circle-open' />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder='패스워드를 다시 입력해주세요'
                                                type='password'
                                                name='repassword'
                                                onChange={handleChange}
                                                onFocus={() =>
                                                    setfocusedRePassword(true)
                                                }
                                                onBlur={() =>
                                                    setfocusedRePassword(false)
                                                }
                                            />
                                        </InputGroup>
                                    </FormGroup>
                                    <div className='text-muted font-italic'>
                                        <small>
                                            password strength:{' '}
                                            <span className='text-success font-weight-700'>
                                                strong
                                            </span>
                                        </small>
                                    </div>
                                    <Row className='my-4'>
                                        <Col xs='12'>
                                            <div className='custom-control custom-control-alternative custom-checkbox'>
                                                <input
                                                    className='custom-control-input'
                                                    id='customCheckRegister'
                                                    name='customCheckRegister'
                                                    type='checkbox'
                                                    onChange={handleChange}
                                                />
                                                <label
                                                    className='custom-control-label'
                                                    htmlFor='customCheckRegister'>
                                                    <span className='text-muted'>
                                                        I agree with the{' '}
                                                        <a
                                                            href='#pablo'
                                                            onClick={(e) =>
                                                                e.preventDefault()
                                                            }>
                                                            Privacy Policy
                                                        </a>
                                                    </span>
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className='text-center'>
                                        <Button
                                            className='mt-4'
                                            color='info'
                                            type='button'
                                            onClick={handleSubmitForm}
                                            disabled={
                                                password !== repassword ||
                                                password === '' ||
                                                !checkbox
                                            }>
                                            Create account
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    {emailGuide && (
                        <ModalDefault
                            handleEmailGuide={(e) => handleEmailGuide(e)}
                        />
                    )}
                </Row>
            </Container>
        </>
    );
}

export default Register;
