
import _ from 'lodash'
//Convert object to URL string
export function toURLString (params) {
  var str = [];
  var notNulls = 0;
  for(var p in params) {
    if (!_.isNull(params[p]) && !_.isUndefined(params[p]) && params[p]!=='' && params[p]!==false) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(params[p]));
      notNulls = notNulls + 1;
    }
  }

  var ret = ''
  if (notNulls === 0) {
    ret = ''
  }
  else {
    ret = '?' + str.join("&")
  }

  return ret
}

// request
export async function request(url, opts) {
  opts = _.extend({
    method: 'GET',
    body: null,
    callback: null,
    sessionToken: null,
    deviceID: 'Browser',
    userID: null,
  }, opts)

  var reqOpts = {
    method: opts.method,
    headers: {}
  }

  if (opts.method === 'POST' || opts.method === 'PATCH') {
    reqOpts.headers['Accept'] = 'application/json'
    reqOpts.headers['Content-Type'] = 'application/json'
  }

  if (opts.body) {
    reqOpts.body = JSON.stringify(opts.body)
  }

  
  let res = {}
  let response = await fetch(url, reqOpts)
    res.status = response.status
    res.code = response.code

    return response.json().then((json) => {
      res.json = json
      return res
    }).then((res) => {
      if (res.status >= 200 && res.status <= 300) {
        return res.json
      } 
      throw res.json
    }).catch((error) => {
      throw(error)
    })
}
