// eslint-disable-next-line no-use-before-define
import React from 'react'
import Laftbar from './leftbar'
// import { useNavigate } from 'react-router-dom'
// import jwt_decode from 'jwt-decode'
// import { oasisTokens, UserType, frontEnums } from '../../../utils/enums'
export default function Dashboard (props: any) {
  // const navigate = useNavigate()
  // const accountType = localStorage.getItem(oasisTokens.accountType)
  // const token = localStorage.getItem(oasisTokens.userToken)
  // if (accountType === null || accountType !== UserType.EMPLOYEE || token === null) {
  //   localStorage.removeItem(oasisTokens.userToken)
  //   localStorage.removeItem(oasisTokens.accountType)
  //   navigate(frontEnums.WELCOME)
  // }

  // if (jwt_decode(token).exp < Date.now() / 1000) {
  //   localStorage.removeItem(oasisTokens.userToken)
  //   localStorage.removeItem(oasisTokens.accountType)
  //   navigate(frontEnums.WELCOME)
  // }
  return (
        <div className="lg:flex w-full bg-lightBlue">
            <div className="lg:w-1/6 ">
                <Laftbar />
            </div>
            <div className="lg:w-5/6 bg-white">
                <hr className="mt-1" />
                {props.children}
            </div>
        </div>
  )
}
