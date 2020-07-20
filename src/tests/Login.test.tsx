import React from 'react'
import { shallow } from 'enzyme'

import Signup from '../Login'


test('loginが正しく動くか', () => {
  const Wrapper = () => {
    const attrs = Signup({})

    return (
      <span>{attrs?.type.email}</span>
    )
  }
  const component = shallow(<Wrapper />)

  // 検証
  expect(component.find('span').text()).toBe("")
})

// 参考
// https://mae.chab.in/archives/60066
// https://qiita.com/isy/items/0b40b50fad21a8e6c863