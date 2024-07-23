"use client";
import React, { useEffect, useRef, useState } from "react";
import { Divider, Radio, Table } from "antd";
import type { TableColumnsType } from "antd";
import "./tabel.css";
const Tabel = () => {
  const dateInputRef: any = useRef(null);

  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  const columns: TableColumnsType<DataType> = [
    // {
    //   title: "Name",
    //   dataIndex: "name",
    //   render: (text: string) => <a>{text}</a>,
    // },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Disabled User",
      age: 99,
      address: "Sydney No. 1 Lake Park",
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === "Disabled User", // Column configuration not to be checked
      name: record.name,
    }),
  };
  useEffect(() => {
    const currentDate = new Date().toISOString().split("T")[0];
    if (dateInputRef.current) {
      dateInputRef.current.value = currentDate;
    }
  }, []);
  return (
    <div className="main_tabel">
      <div className="projected_style">
        <div className="grid grid-cols-12 ms-12 mt-3 ">
          <div className="col-span-1 ">
            <h2 className="text-white">Live Tracking: 70</h2>
          </div>
          <div className="col-span-7 ms-10">
            &nbsp; &nbsp;&nbsp;&nbsp;
            <span className="pipe_color">| &nbsp; &nbsp;&nbsp;&nbsp;</span>
            <span className="text-white">Starting Date: &nbsp;&nbsp;</span>{" "}
            <input type="date" ref={dateInputRef} className="input_filed" />
          </div>
          <div className="col-span-1 text-end mr-3 flex justify-end">
            <h2 className="text-bsColor bg-bsBgColor rounded-full w-8 text-center  py-2 text-xs -mt-1">
              BS
            </h2>
          </div>
          <div className="col-span-1 text-end -ms-2  flex justify-start">
            <h2 className="text-atColor bg-atBgColor rounded-full px-3 ms-3 py-2 text-xs -mt-1 text-center">
              At{" "}
            </h2>
            <div className="grid grid-cols-12  gap-2 ms-5 bg-bgBtn shadow-lg rounded-md px-3 -mt-1 py-1">
              <div className="col-span-1">
                <svg
                  className="h-5 w-5 mt-1 text-white white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>

              <div className="col-span-9">
                <h2 className="text-white text-center ms-3">
                  {" "}
                  &nbsp;&nbsp;Share
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-1 text-end mr-3 flex justify-center ms-10">
            <svg
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
              />
            </svg>
          </div>
          <div className="col-span-1 text-end mr-3 flex justify-start -ms-6">
            <svg
              className="h-6 w-6 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M4.05 11a8 8 0 1 1 .5 4m-.5 5v-5h5" />
            </svg>
            <svg
              className="h-6 w-6  ms-4 text-white"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />{" "}
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        {/* <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value);
          }}
          value={selectionType}
        >
          <Radio value="checkbox">Checkbox</Radio>
          <Radio value="radio">radio</Radio>
        </Radio.Group> */}

        {/* <Divider /> */}

        <Table
          rowSelection={{
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
          bordered
        />
      </div>
    </div>
  );
};

export default Tabel;
