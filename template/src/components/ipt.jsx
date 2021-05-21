import React, { useState, useRef } from 'react';

const Ipt = (props: any) => {
    const iptRef = useRef();
    const [pla, setPla] = useState<string>(props.edit ? props.value : '请输入一段文字');
    const [btn_text, setBtn_text] = useState<string>(props.edit ? "修改" : "添加");

    const save = () => {
        if (iptRef.current.value) {
            props.save(iptRef.current.value);
            iptRef.current.value = '';
        }
        else return
    }

    return (
        <div className="iptbox">
            <input ref={iptRef} type="text" placeholder={pla} />
            <button onClick={save}>{btn_text}</button>
            {props.edit ? <button onClick={props.cancel}>取消</button> : ''}
        </div>
    )
};

export default Ipt;


