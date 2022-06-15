import React from 'react';
// import { Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

// const { Dragger } = Upload;

function DraggerUI() {
  // const props = {
  //   name: 'applicationFile',
  //   listType: 'picture',
  //   action: 'http://localhost:8080/api/intern/upload/application-file',
  //   headers: {
  //     authorization: 'Bearer ' + localStorage.getItem('token')
  //   },
  //   onChange(info: any) {
  //     const { status } = info.file;

  //     if (status !== 'uploading') {
  //       //console.log(info.file, info.fileList);
  //     }
  //     if (status === 'done') {
  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === 'error') {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   onDrop(e: any) {
  //     console.log('Dropped files', e.dataTransfer.files);
  //   }
  // };

  return (
    // <Dragger {...props}>
    <>
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Yüklemek istediğiniz dosya veya dosyaları sürükleyiniz, yada tıklayarak seçiniz.
      </p>
      <p className="ant-upload-hint">
        Bu aşamada sizden beklenen dosyalar, başvuru formudur. Herhangi başka bir dosyanın yüklenmesi halinde, sonraki
        DOSYA ONAYLANMASI aşamasında dosyanız RET alır. Bu yüzden dikkatli olunuz.
      </p>
    </>
    // </Dragger>
  );
}

export default DraggerUI;
