import React, { useState } from 'react';
import { Todo } from './todo';
import Ipt from './ipt';
import TodoItem from './todo_item';

const App = () => {
  const [list, setList] = useState<Array<Todo>>([]);
  const [num, setNum] = useState<Number>(0);

  const countNum = () => {
    let _n = 0;
    list.map((item: Todo) => {
      if (item.isSelected) _n++;
    })
    setNum(_n)
  }

  const save = (e: string) => {
    let temp: Todo = {
      id: list.length + 1,
      word: e,
      isSelected: false,
      edit: false,
    };
    setList([...list, temp]);
  }

  const edit = (idx: number) => {
    let temp = list[idx];
    temp.edit = true;
    setList([...list]);
  }

  const update = (e: string, idx: number) => {
    let temp = list[idx];
    temp.edit = false;
    temp.word = e;
    setList([...list]);
  }
  const cancel = (idx: number) => {
    let temp = list[idx];
    temp.edit = false;
    setList([...list]);
  }
  const remove = (idx: number) => {
    list.splice(idx, 1);
    setList([...list]);
    countNum();
  }
  const select = (idx: number, status: boolean) => {
    let temp = list[idx];
    temp.isSelected = status;
    setList([...list]);
    countNum();
  }

  const empty = () => {
    let temp = list.map((item: Todo) => {
      item.isSelected = false;
      return item;
    })
    setList([...temp]);
    setNum(0);
  }

  const removeSelect = () => {
    let temp = list.filter((item: Todo) => {
      if (!item.isSelected) return item;
    });
    setList([...temp]);
    setNum(0);
  }

  return (
    <div className="todobox">
      <h1>React Hook+Typescript Todolist</h1>
      <Ipt save={save} />
      {list.map((item: Todo, idx: number) => {
        return <TodoItem key={idx} idx={idx} source={item} edit={edit} update={update} cancel={cancel} remove={remove} select={select} />
      })}
      <div className="foot">
        <span>{num}项被选中</span>
        {
          num > 0 ? [
            <button key="1" onClick={removeSelect}>删除所选</button>,
            <button key="2" onClick={empty}>取消选择</button>
          ] :
            ""
        }
      </div>
    </div>
  )
};

export default App;


