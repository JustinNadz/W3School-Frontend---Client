"use client";

import { useState } from "react";
import { Modal, Button as AntButton, Input as AntInput, Divider, Space } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
}

export default function AuthModal({ open, onClose }: AuthModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      centered
      width={560}
      title={
        <div style={{ textAlign: "center", fontWeight: 700 }}>Sign in</div>
      }
    >
      <div style={{ textAlign: "center", color: "#666", marginBottom: 12 }}>
        Get access to more learning features
      </div>
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <span style={{ color: "#888" }}>Don't have an account? </span>
        <a>Register</a>
      </div>

      <Space size="middle" align="center" style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
        <AntButton shape="round">G</AntButton>
        <AntButton shape="round">f</AntButton>
        <AntButton shape="round">GH</AntButton>
        <AntButton shape="round">SSO</AntButton>
      </Space>

      <Divider plain>or</Divider>

      <Space direction="vertical" size="middle" style={{ width: "100%" }}>
        <AntInput
          size="large"
          placeholder="Email"
          prefix={<MailOutlined />}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AntInput.Password
          size="large"
          placeholder="Password"
          prefix={<LockOutlined />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          iconRender={(visible) => <span role="img" aria-label="toggle password">{visible ? "🙈" : "👁️"}</span>}
        />
        <div style={{ textAlign: "left" }}>
          <a>Forgot your password?</a>
        </div>
        <AntButton type="primary" size="large" block>
          Sign In
        </AntButton>
      </Space>
    </Modal>
  );
}
