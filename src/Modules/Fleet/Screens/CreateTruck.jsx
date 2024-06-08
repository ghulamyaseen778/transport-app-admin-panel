import { Button, Card, Col, Form, Input, Row, Select, message } from "antd";
import React, { useContext } from "react";
import "../style/index.css";
import { Truck } from "../../../CONTEXT";

const CreateTruck = ({ load }) => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  const { truck, setTruck } = useContext(Truck);

  const onSubmit = (e) => {
    load(true);
    console.log(e);
    setTimeout(() => {
      setTruck([...truck, e]);
      form.resetFields();
      load(false);
      message.success("Sucssefully Uploaded");
    }, 3000);
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
      <Form
        layout="vertical"
        className="routes-from "
        form={form}
        onFinish={onSubmit}
      >
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
                options={[
                  { value: "Chevrolet", name: "Chevrolet" },
                  { value: "Ford", name: "Ford" },
                  { value: "Ram", name: "Ram" },
                  { value: "GMC", name: "GMC" },
                  { value: "Toyota", name: "Toyota" },
                  { value: "Nissan", name: "Nissan" },
                  { value: "Honda", name: "Honda" },
                  { value: "Jeep", name: "Jeep" },
                  { value: "Freightliner", name: "Freightliner" },
                  { value: "Peterbilt", name: "Peterbilt" },
                  { value: "Kenworth", name: "Kenworth" },
                ]}
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
                options={[
                  { name: "Silverado", value: "Silverado" },
                  { name: "Colorado", value: "Colorado" },
                ]}
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
                Create{" "}
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Card>
  );
};

export default CreateTruck;
