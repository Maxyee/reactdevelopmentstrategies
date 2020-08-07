import React from "react";
import ErrorPages from "./ErrorPages";

const ErrorHandler = ({ children }) => {
  const statusCode = sessionStorage.getItem('code')
  console.log(statusCode)
  switch (statusCode) {
    case "400":
      msg = 'Bad Request'
      return <ErrorPages errorMsg={msg} />

    case "401":
      msg = 'Unauthorized'
      return <ErrorPages errorMsg={msg} />

    case "402":
      msg = 'Payment Required'
      return <ErrorPages errorMsg={msg} />

    case "403":
      msg = 'Forbidden'
      return <ErrorPages errorMsg={msg} />

    case "404":
      let msg = 'Not Found'
      return <ErrorPages errorMsg={msg} />;

    case "405":
      msg = 'Method Not Allowed'
      return <ErrorPages errorMsg={msg} />

    case "406":
      msg = 'Not Acceptable'
      return <ErrorPages errorMsg={msg} />

    case "407":
      msg = 'Proxy Authentication Required'
      return <ErrorPages errorMsg={msg} />

    case "408":
      msg = 'Request Timeout'
      return <ErrorPages errorMsg={msg} />

    case "409":
      msg = 'Conflict'
      return <ErrorPages errorMsg={msg} />

    case "410":
      msg = 'Gone'
      return <ErrorPages errorMsg={msg} />

    case "411":
      msg = 'Length Required'
      return <ErrorPages errorMsg={msg} />

    case "412":
      msg = 'Precondition Failed'
      return <ErrorPages errorMsg={msg} />

    case "413":
      msg = 'Request Entity Too Large'
      return <ErrorPages errorMsg={msg} />

    case "414":
      msg = 'Request-URI Too Long'
      return <ErrorPages errorMsg={msg} />

    case "415":
      msg = 'Unsupported Media Type'
      return <ErrorPages errorMsg={msg} />

    case "416":
      msg = 'Request Range Not Satisfiable'
      return <ErrorPages errorMsg={msg} />

    case "417":
      msg = 'Expectation Failed'
      return <ErrorPages errorMsg={msg} />

    case "418":
      msg = 'I am a teapot (RFC 2324)'
      return <ErrorPages errorMsg={msg} />

    case "420":
      msg = 'Enhance Your Calm (Twitter)'
      return <ErrorPages errorMsg={msg} />

    case "422":
      msg = 'Unprocessable Entitiy (WebDAV)'
      return <ErrorPages errorMsg={msg} />

    case "423":
      msg = 'Locked (WebDAV)'
      return <ErrorPages errorMsg={msg} />

    case "424":
      msg = 'Failed Dependency (WebDAV)'
      return <ErrorPages errorMsg={msg} />

    case "425":
      msg = 'Reserved for WebDAV'
      return <ErrorPages errorMsg={msg} />

    case "426":
      msg = 'Upgrade Required'
      return <ErrorPages errorMsg={msg} />

    case "428":
      msg = 'Precondition Required'
      return <ErrorPages errorMsg={msg} />

    case "429":
      msg = 'Too Many Requests'
      return <ErrorPages errorMsg={msg} />

    case "431":
      msg = 'Request Header Fields Too Large'
      return <ErrorPages errorMsg={msg} />

    case "444":
      msg = 'No Response (Nginx)'
      return <ErrorPages errorMsg={msg} />

    case "449":
      msg = 'Retry With (Microsoft)'
      return <ErrorPages errorMsg={msg} />

    case "450":
      msg = 'Blocked by Windows Parental Controls (Microsoft)'
      return <ErrorPages errorMsg={msg} />

    case "451":
      msg = 'Unavailable For Legal Reasons'
      return <ErrorPages errorMsg={msg} />

    case "499":
      msg = 'Client Closed Request (Nginx)'
      return <ErrorPages errorMsg={msg} />

    case "500":
      msg = 'Internal Server Error'
      return <ErrorPages errorMsg={msg} />

    case "501":
      msg = 'Not Implemented'
      return <ErrorPages errorMsg={msg} />

    case "502":
      msg = 'Bad Gateway'
      return <ErrorPages errorMsg={msg} />

    case "503":
      msg = 'Service Unavailable'
      return <ErrorPages errorMsg={msg} />

    case "504":
      msg = 'Gateway Timeout'
      return <ErrorPages errorMsg={msg} />

    case "505":
      msg = 'HTTP Version Not Supported'
      return <ErrorPages errorMsg={msg} />

    case "506":
      msg = 'Variant Also Negotiates (Experimental)'
      return <ErrorPages errorMsg={msg} />

    case "507":
      msg = 'Insufficient Storage (WebDAV)'
      return <ErrorPages errorMsg={msg} />

    case "508":
      msg = 'Loop Detected (WebDAV)'
      return <ErrorPages errorMsg={msg} />

    case "509":
      msg = 'Bandwidth Limit Exceeded (Apache)'
      return <ErrorPages errorMsg={msg} />

    case "510":
      msg = 'Not Extended'
      return <ErrorPages errorMsg={msg} />

    case "511":
      msg = 'Network Authentication Required'
      return <ErrorPages errorMsg={msg} />

    case "598":
      msg = 'Network read timeout error'
      return <ErrorPages errorMsg={msg} />

    case "599":
      msg = 'Network connect timeout error'
      return <ErrorPages errorMsg={msg} />

    default:
      //msg = 'default message from switch case'
      return children
  }

  //return <ErrorPages errorMsg={msg} />
};

export default ErrorHandler;