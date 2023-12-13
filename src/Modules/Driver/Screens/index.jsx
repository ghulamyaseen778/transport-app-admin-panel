import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";

const DriverCreate = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <>
      <Card>
        <div
          style={{
            color: "#141414",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: 20,
          }}
        >
          New Driver
        </div>
        <Form
        name="sss"
        form={form}
        layout="vertical"
        style={{ width: "100%" }}
        className="routes-from"
      >
        <Row gutter={12}>
        <Col span={6}>
            <Form.Item
              label="Driver Name"
              name="Driver Name"
              rules={[
                {
                  message: "Please Enter Driver Name",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Name" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        <Col span={6}>
            <Form.Item
              label="License Number"
              name="License Number"
              rules={[
                {
                  message: "Please Enter License Number",
                  required: true,
                },
              ]}
            >
              <Input placeholder="License Number" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="License type"
              name="License type"
              rules={[
                {
                  message: "Please Enter License type",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="License type"
                options={[{ label: "Karachi", value: "karachi" }]}
              />
            </Form.Item>
          </Col>
          <Col span={6}></Col>
          <div
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#E9EAEC",
              marginBottom: 20,
            }}
          ></div>
          <Col span={6}>
            <Form.Item
              label="Phone Number"
              name="Phone Number"
              rules={[
                {
                  message: "Please Enter Phone Number",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Phone Number" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="E-mail"
              name="E-mail"
              rules={[
                {
                  message: "Please Enter E-mail",
                  required: true,
                },
              ]}
            >
              <Input placeholder="E-mail" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Nationality"
              name="Nationality"
              rules={[
                {
                  message: "Please Enter Nationality",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Nationality"
                options={[{ label: "Karachi", value: "karachi" }]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Date"
              name="Date"
              rules={[
                {
                  message: "Please Enter Date",
                  required: true,
                },
              ]}
            >
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <div
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#E9EAEC",
              marginBottom: 20,
            }}
          ></div>
           <Col span={6}>
            <Form.Item
              label="Address 1"
              name="Address"
              rules={[
                {
                  message: "Please Enter Address 1",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Address" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
            label="Address 2"
              name="Address2"
              rules={[
                {
                  message: "Please Enter Address 2",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Address" style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="State"
              name="State"
              rules={[
                {
                  message: "Please Enter State",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select State"
                options={[{ label: "Karachi", value: "karachi" }]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="Postal Code"
              name="Postal Code"
              rules={[
                {
                  message: "Please Enter Postal Code",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Postal Code"
                options={[{ label: "Karachi", value: "karachi" }]}
              />
            </Form.Item>
          </Col>
          <div
            style={{
              width: "100%",
              height: 2,
              backgroundColor: "#E9EAEC",
              marginBottom: 20,
            }}
          ></div>
          <Col span={24}>
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Button htmlType="button" onClick={onReset}>
                Discard
              </Button>
              <Button htmlType="submit" type="primary">
                Create{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      </Card>
    </>
  );
};

export default DriverCreate;
