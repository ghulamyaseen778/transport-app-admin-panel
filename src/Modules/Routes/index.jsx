import { Button, Card, Col, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";
import "./style/index.css";
const { TextArea } = Input;
const RoutesComp = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Card>
      <div
        style={{
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          color: "#141414",
          display: "flex",
          alignSelf: "flex-start",
        }}
      >
        Schedule New Event
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
              label="From"
              name="From"
              rules={[
                {
                  message: "Please Enter From",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select city"
                options={[
                  { label: "Karachi", value: "karachi" },
                  { label: "California", value: "dsjksj" },
                ]}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              label="To"
              name="To"
              rules={[
                {
                  message: "Please Enter To",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select city"
                options={[
                  { label: "Karachi", value: "karachi" },
                  { label: "New York", value: "karaddchi" },
                ]}
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
          <Col span={6}>
            <Form.Item
              label="Driver"
              name="Driver"
              rules={[
                {
                  message: "Please Enter Driver",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Driver"
                options={[{ label: "Karachi", value: "karachi" },{ label: "Jhon", value: "dd" }]}
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
          <Col span={12}>
            <Form.Item
              label="Recipient"
              name="Recipient"
              rules={[
                {
                  message: "Please Enter Recipient",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Write here..." style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label="Select Truck"
              name="Select Truck"
              rules={[
                {
                  message: "Please Enter Truck",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Truck"
                options={[{ label: "Karachi", value: "karachi" },{ label: "DE 546", value: "546" }]}
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
          <Col span={12}>
            <Form.Item
              label="Select notes"
              name="Select notes"
              rules={[
                {
                  message: "Please Enter notes ",
                  required: true,
                },
              ]}
            >
              <TextArea
                placeholder="Note Write here..."
                autoSize={{
                  minRows: 6,
                  maxRows: 10,
                }}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <div
              style={{
                display: "flex",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 20,
              }}
            >
              <Button htmlType="button" onClick={onReset}>
                Discard
              </Button>
              <Button htmlType="submit" type="primary">
                Schedule{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default RoutesComp;
