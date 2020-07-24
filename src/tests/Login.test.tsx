import React from 'react'
import { shallow, mount } from 'enzyme'
import { renderHook, act } from "@testing-library/react-hooks"
import {TextField, Button} from '@material-ui/core'
import Signup from '../Login'


test('loginが正しく動くか', () => {
  // Hooksのテストのため、ラップする
  const Wrapper = () => {
    const attrs = Signup({})
    return (
      <span>{attrs?.type.email}</span>
    )
  }
  const component = shallow(<Wrapper />)

  // emailの初期地
  expect(component.find('span').text()).toBe("")
})

test('login success', () => {

  const wrapper2 = shallow(<Signup />);
  window.alert = jest.fn()
  
  wrapper2.find(TextField).find("#email").simulate('change', {target: {value: 'aaa'}})
  wrapper2.find(TextField).find("#password").simulate('change', {target: {value: 'bbb'}})
  
  let button = wrapper2.find(Button).simulate('click')
  
  expect(window.alert.call.length).toBe(1)
  expect(window.alert).toHaveBeenCalledWith('OK')

})

test('login error', () => {

  const wrapper2 = shallow(<Signup />);
  window.alert = jest.fn()
  
  wrapper2.find(TextField).find("#email").simulate('change', {target: {value: 'aaa'}})
  wrapper2.find(TextField).find("#password").simulate('change', {target: {value: 'ccc'}})
  
  let button = wrapper2.find(Button).simulate('click')
  
  expect(window.alert.call.length).toBe(1)
  expect(window.alert).toHaveBeenCalledWith('NG')

})

// 参考
// https://mae.chab.in/archives/60066
// https://qiita.com/isy/items/0b40b50fad21a8e6c863
//https://qiita.com/bebetaro/items/4b4e2e8cdacddb5aa7bf
//