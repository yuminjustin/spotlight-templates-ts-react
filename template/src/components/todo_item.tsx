import React from 'react';
import Ipt from './ipt';

const TodoItem = (props: any) => {
    const save = (e: string) => {
        props.update(e, props.idx)
    }
    const cancel = () => {
        props.cancel(props.idx)
    }
    const setEdit = () => {
        props.edit(props.idx)
    }
    const del = () => {
        props.remove(props.idx)
    }
    const select = (e:any) =>{
      props.select(props.idx,e.currentTarget.checked);
    }
    return (
        <div className={'todo-item' + (props.source.edit ? ' edit' : '')}>
            {
                props.source.edit ?
                    (
                        <div>
                            <Ipt save={save} cancel={cancel} edit={1} value={props.source.word} />
                        </div>
                    ) :
                    (
                        <div className="todo-item-view" onDoubleClick={setEdit}>
                            <input type="checkbox" onChange={select} checked={props.source.isSelected}/>
                            <span className="word ellipsis">{props.source.word}</span>
                            <span className="del" onClick={del}></span>
                        </div>
                    )
            }

        </div>
    )
};
export default TodoItem;
