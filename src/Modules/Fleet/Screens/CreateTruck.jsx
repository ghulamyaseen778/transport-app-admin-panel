import { Button, Card, Col, Form, Input, Row, Select } from "antd";
import React from "react";
import "../style/index.css"

const CreateTruck = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Card>
      <div
        style={{
          fontFamily: "Poppins",
          fontSize: 18,
          color: "#141414",
          fontWeight: 600,
        }}
      >
        New Truck
      </div>
      <Form layout="vertical" className="routes-from ">
        <Row gutter={12}>
          <Col span={8}>
            <Form.Item
              label="Brand"
              name="Brand"
              rules={[
                {
                  message: "Please Enter Brand",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Brand"
                options={[{ label: "Karachi", value: "karachi" }]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Model"
              name="Model"
              rules={[
                {
                  message: "Please Enter Model",
                  required: true,
                },
              ]}
            >
              <Select
                placeholder="Select Model"
                options={[{ label: "Karachi", value: "karachi" }]}
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              label="Registration"
              name="Registration"
              rules={[
                {
                  message: "Please Enter Registration",
                  required: true,
                },
              ]}
            >
              <Input placeholder="Write here..." style={{ width: "100%" }} />
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
                // alignItems: "center",
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

export default CreateTruck;
