import React from 'react';
import { message, MessageArgsProps } from 'antd';

interface IMessageProps extends MessageArgsProps {}

function MessageUI(props: IMessageProps) {
  return message.info('This is a normal message');
}

export default MessageUI;
