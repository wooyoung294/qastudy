import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {Button, Table, Form, FormCheck, FormSelect} from 'react-bootstrap';
import {useState} from "react";

function App() {
    const [typeValue,setTypeValue] = useState("");
    const typeHandler = (e)=>{
        setTypeValue(e.target.value)
    }
    const [fillValue,setfillValue] = useState("Fill");
    const fillHandler = (e)=>{
        setfillValue(e.target.value)
    }
    const [items,setItems] = useState(
        {
            idBtn:false,
            nameBtn:false,
            testidBtn:false,
            classBtn:false,
            textExactBtn:false,
            textBtn:false,
            placeholderInput:false,
            click:false,
            dbClick:false,
            checkbox:false,
            radio:false,
            select:false,
            type:false,
            fill:false,
        }
    )
    const clickHandle = (key) => {
        setItems(prev => ({ ...prev, [key]: !prev?.[key] }));
    };
    return (
    <>
      <div style={{ display: 'flex', justifyContent:'center', alignItems: 'center', gap: '10px' }}>
          <h1>Playwrights</h1>
          <div>
              <Table style={{border:'1px solid #ccc'}}>
                  <thead>
                      <tr>
                          <th colSpan={2}>Locator</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                              <Button id={"idBtn"} onClick={()=>clickHandle("idBtn")}>ID</Button>
                          </td>
                          <td>
                              {items.idBtn === true ? <span>locator("#IdBtn")</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Button name={"nameBtn"} onClick={()=>clickHandle("nameBtn")}>Name</Button>
                          </td>
                          <td>
                              {items.nameBtn === true ? <span>locator('button[name="nameBtn"]')</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <div className={"divBtn btn-primary btn"} data-testid={"test"} onClick={()=>clickHandle("testidBtn")}>TestId</div>
                          </td>
                          <td>
                              {items.testidBtn === true ? <span>get_by_test_id("test")</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Button className={"myClass"} onClick={()=>clickHandle("classBtn")}>Class</Button>
                          </td>
                          <td>
                              {items.classBtn === true ? <span>locator('.myClass')</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Button onClick={()=>clickHandle("textExactBtn")}>Text</Button>
                          </td>
                          <td>
                              {items.textExactBtn === true ? <span>get_by_text("Text",exact=True)</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Button onClick={()=>clickHandle("textBtn")}>Text1</Button>
                          </td>
                          <td>
                              {items.textBtn === true ? <span>get_by_text("Text1")</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Form.Control placeholder={"설명!"} onClick={()=>clickHandle("placeholderInput")}/>
                          </td>
                          <td>
                              {items.placeholderInput === true ? <span>get_by_placeholder("설명!")</span> : null}
                          </td>
                      </tr>
                  </tbody>
              </Table>
          </div>
          <div>
              <Table style={{border:'1px solid #ccc'}}>
                  <thead>
                      <tr>
                          <th colSpan={2}>Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>
                              <Button id="clickAction" onClick={()=>clickHandle("click")} disabled={items.click}>Click</Button>
                          </td>
                          <td>
                              {items.click === true ? <span>Click</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Button id="dbClickAction" onDoubleClick={()=>clickHandle("dbClick")}>DoubleClick</Button>
                          </td>
                          <td id={"dbClickDesc"}>
                              {items.dbClick === true ? <span>DoubleClick</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <FormCheck id="checkAction" onClick={()=>clickHandle("checkbox")}/>
                              <FormCheck id={"indeterminate"}>
                                  <FormCheck.Input
                                      ref={(el) => { if (el) el.indeterminate = true; }}
                                  />
                              </FormCheck>
                          </td>
                          <td>
                              {items.checkbox === true ? <span>Check</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td style={{display: 'flex', justifyContent:'center',alignItems:'center' ,border: 'none', gap: '10px'}}>
                              <FormCheck id="radio1Action" type={"radio"} name={"radio"} value={"Radio1"} onClick={()=>clickHandle("radio")} defaultChecked/>radio1
                              <FormCheck id="radio2Action" type={"radio"} name={"radio"} value={"Radio2"} onClick={()=>clickHandle("radio")}/>radio2
                          </td>
                          <td>
                              {items.radio === true ? <span>Check</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <FormSelect id="selectAction" onChange={()=>clickHandle("select")}>
                                  <option id="op1" value="option1" defaultValue>option1</option>
                                  <option id="op2" value="option2">option2</option>
                                  <option id="op3" value="option3">option3</option>
                              </FormSelect>
                          </td>
                          <td>
                              {items.select === true ? <span>Select</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Form.Control id="typeAction" value={typeValue} onChange={(e)=>typeHandler(e)}/>
                          </td>
                          <td>
                              {typeValue !== '' ? <span>Type</span> : null}
                          </td>
                      </tr>
                      <tr>
                          <td>
                              <Form.Control id="fillAction" value={fillValue} onChange={(e)=>fillHandler(e)}/>
                          </td>
                          <td>
                              {fillValue !== '' && fillValue !== "Fill" ? <span>Fill</span> :null}
                          </td>
                      </tr>
                  </tbody>
              </Table>
          </div>
      </div>
    </>
  )
}

export default App
