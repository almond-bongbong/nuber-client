(window['webpackJsonpnuber-client'] =
  window['webpackJsonpnuber-client'] || []).push([
  [0],
  {
    146: function(e, n, a) {
      'use strict';
      a.r(n);
      var t = a(21),
        r = a(0),
        o = a.n(r),
        c = a(30),
        i = a.n(c),
        l = a(33),
        d = a(24),
        u = a(15),
        s = a(40),
        f = a(35),
        m = a(83),
        p = a(71),
        g = a(4),
        b = a(12),
        v = function() {
          var e = localStorage.getItem('jwt');
          return e || '';
        },
        h = new l.a(),
        O = new u.a(function(e, n) {
          return e.setContext({ headers: { 'X-JWT': v() } }), n(e);
        }),
        E = new f.a({ uri: 'https://192.168.219.136:4000/graphql' }),
        j = new p.a({
          options: { connectionParams: { 'X-JWT': v() }, reconnect: !0 },
          uri: 'wss://192.168.219.136:4000/subscription',
        }),
        x = Object(u.e)(
          function(e) {
            var n = e.query,
              a = Object(g.getMainDefinition)(n),
              t = a.kind,
              r = a.operation;
            return 'OperationDefinition' === t && 'subscription' === r;
          },
          j,
          E,
        ),
        k = Object(s.a)(function(e) {
          var n = e.graphQLErrors,
            a = e.networkError;
          n &&
            n.forEach(function(e) {
              var n = e.message;
              console.log(n),
                'No JWT. I refuse to proceed' === n &&
                  (b.b.error('Unexpected error: '.concat(n)),
                  localStorage.removeItem('jwt'),
                  window.location.replace('/'));
            }),
            a && b.b.error('Network error: '.concat(a));
        }),
        _ = Object(m.a)({
          cache: h,
          defaults: {
            auth: {
              __typename: 'Auth',
              isLoggedIn: Boolean(localStorage.getItem('jwt')),
            },
          },
          resolvers: {
            Mutation: {
              logUserIn: function(e, n, a) {
                var t = n.token,
                  r = a.cache;
                return (
                  localStorage.setItem('jwt', t),
                  r.writeData({
                    data: { auth: { __typename: 'Auth', isLoggedIn: !0 } },
                  }),
                  null
                );
              },
              logUserOut: function(e, n, a) {
                var t = a.cache;
                return (
                  localStorage.removeItem('jwt'),
                  t.writeData({
                    data: { auth: { __typename: 'Auth', isLoggedIn: !1 } },
                  }),
                  null
                );
              },
            },
          },
        }),
        y = new d.a({ cache: h, link: u.a.from([k, _, Object(u.b)(O, x)]) }),
        w = a(10),
        S = (a(108), a(2)),
        C = a(1),
        I = a(75),
        N = a.n(I);
      function P() {
        var e = Object(C.a)([
          "\n  @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');\n  ",
          '\n  * {\n    box-sizing: border-box;\n  }\n  body {\n    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  input,\n  button {\n    &:focus,\n    &:active {\n      outline: 0;\n    }\n  }\n   h1,h2,h3,h4,h5,h6{\n      font-family:\'Maven Pro\', sans-serif;\n  }\n',
        ]);
        return (
          (P = function() {
            return e;
          }),
          e
        );
      }
      var M = Object(S.createGlobalStyle)(P(), N.a),
        A = {
          blue: '#3498db',
          green: '#1abc9c',
          grey: '#7f8c8d',
          yellow: '#f1c40f',
        },
        D = a(16),
        R = a(32),
        L = a(7),
        T = a.n(L),
        G = a(13),
        F = a(8),
        U = a(11);
      function B() {
        var e = Object(C.a)([
          '\n    query myPlaces {\n        GetMyPlaces {\n            ok\n            error\n            places {\n                id\n                name\n                address\n                isFav\n            }\n        }\n    }\n',
        ]);
        return (
          (B = function() {
            return e;
          }),
          e
        );
      }
      function $() {
        var e = Object(C.a)([
          '\n    query userProfile {\n        GetMyProfile {\n            ok\n            error\n            user {\n                id\n                firstName\n                lastName\n                email\n                profilePhoto\n                fullName\n                isDriving\n            }\n        }\n    }\n',
        ]);
        return (
          ($ = function() {
            return e;
          }),
          e
        );
      }
      var z = Object(U.a)($()),
        K = Object(U.a)(B()),
        V = a(17),
        H = a.n(V);
      function q() {
        var e = Object(C.a)([
          '\n  width: 100%;\n  background-color: black;\n  color: white;\n  text-transform: uppercase;\n  padding: 15px 0;\n  font-size: 16px;\n  border: 0;\n  cursor: pointer;\n  font-weight: 500;\n  text-align: center;\n  &:active,\n  &:focus {\n    outline: none;\n  }\n  &:disabled {\n    opacity: 0.8;\n  }\n',
        ]);
        return (
          (q = function() {
            return e;
          }),
          e
        );
      }
      var W = S.default.button(q()),
        J = function(e) {
          var n = e.type,
            a = void 0 === n ? 'button' : n,
            t = e.children,
            r = e.onClick,
            c = e.disabled,
            i = void 0 !== c && c,
            l = e.className;
          return o.a.createElement(
            W,
            { type: a, disabled: i, onClick: r, className: l },
            t,
          );
        },
        Z = function(e) {
          var n = e.children,
            a = e.onSubmit,
            t = e.className,
            c = Object(r.useCallback)(
              function(e) {
                e.preventDefault(), a(e);
              },
              [a],
            );
          return o.a.createElement('form', { className: t, onSubmit: c }, n);
        };
      function Q() {
        var e = Object(C.a)(['\n  transform: scale(0.8);\n']);
        return (
          (Q = function() {
            return e;
          }),
          e
        );
      }
      var Y = S.default.div(Q()),
        X = function(e) {
          var n = e.backTo,
            a = e.className;
          return o.a.createElement(
            Y,
            { className: a },
            o.a.createElement(
              D.b,
              { to: n },
              o.a.createElement(
                'svg',
                {
                  width: '24',
                  height: '24',
                  xmlns: 'http://www.w3.org/2000/svg',
                  fillRule: 'evenodd',
                  clipRule: 'evenodd',
                },
                o.a.createElement('path', {
                  d:
                    'M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z',
                }),
              ),
            ),
          );
        };
      function ee() {
        var e = Object(C.a)(['\n  margin-left: 10px;\n']);
        return (
          (ee = function() {
            return e;
          }),
          e
        );
      }
      function ne() {
        var e = Object(C.a)([
          '\n  background-color: black;\n  color: white;\n  display: flex;\n  height: 50px;\n  font-size: 20px;\n  font-weight: 300;\n  align-items: center;\n  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n  & svg {\n    fill: white;\n  }\n  margin-bottom: 50px;\n  padding: 0 10px;\n',
        ]);
        return (
          (ne = function() {
            return e;
          }),
          e
        );
      }
      var ae = S.default.header(ne()),
        te = S.default.h2(ee()),
        re = function(e) {
          var n = e.title,
            a = e.backTo;
          return o.a.createElement(
            ae,
            null,
            a && o.a.createElement(X, { backTo: a }),
            o.a.createElement(te, null, n),
          );
        };
      function oe() {
        var e = Object(C.a)([
          '\n  border: none;\n  border-bottom: 2px solid ',
          ';\n  font-size: 20px;\n  width: 100%;\n  padding-bottom: 10px;\n  font-weight: 500;\n  transition: border-bottom 0.1s linear;\n  &:-webkit-autofill {\n    box-shadow: 0 0 0 1000px white inset !important;\n  }\n  &:focus {\n    border-bottom-color: #2c3e50;\n    outline: none;\n  }\n  &::placeholder {\n    color: ',
          ';\n    font-weight: 300;\n  }\n',
        ]);
        return (
          (oe = function() {
            return e;
          }),
          e
        );
      }
      var ce = S.default.input(
          oe(),
          function(e) {
            return e.theme.grey;
          },
          function(e) {
            return e.theme.grey;
          },
        ),
        ie = function(e) {
          var n = e.value,
            a = e.onChange,
            t = e.className,
            r = e.placeholder,
            c = e.type,
            i = void 0 === c ? 'text' : c,
            l = e.name,
            d = void 0 === l ? '' : l;
          return o.a.createElement(ce, {
            type: i,
            value: n,
            name: d,
            className: t,
            placeholder: r,
            onChange: a,
          });
        };
      function le() {
        var e = Object(C.a)([
          '\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 10000;\n  background: rgba(0, 0, 0, 0.3);\n\n  .spinner {\n    position: absolute;\n    z-index: 10;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n',
        ]);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      var de = S.default.div(le()),
        ue = function() {
          return o.a.createElement(
            de,
            null,
            o.a.createElement(
              'div',
              { className: 'spinner' },
              o.a.createElement(
                'svg',
                {
                  width: '44',
                  height: '44',
                  viewBox: '0 0 44 44',
                  xmlns: 'http://www.w3.org/2000/svg',
                  stroke: '#fff',
                },
                o.a.createElement(
                  'g',
                  { fill: 'none', fillRule: 'evenodd', strokeWidth: '2' },
                  o.a.createElement(
                    'circle',
                    { cx: '22', cy: '22', r: '1' },
                    o.a.createElement('animate', {
                      attributeName: 'r',
                      begin: '0s',
                      dur: '1.8s',
                      values: '1; 20',
                      calcMode: 'spline',
                      keyTimes: '0; 1',
                      keySplines: '0.165, 0.84, 0.44, 1',
                      repeatCount: 'indefinite',
                    }),
                    o.a.createElement('animate', {
                      attributeName: 'stroke-opacity',
                      begin: '0s',
                      dur: '1.8s',
                      values: '1; 0',
                      calcMode: 'spline',
                      keyTimes: '0; 1',
                      keySplines: '0.3, 0.61, 0.355, 1',
                      repeatCount: 'indefinite',
                    }),
                  ),
                  o.a.createElement(
                    'circle',
                    { cx: '22', cy: '22', r: '1' },
                    o.a.createElement('animate', {
                      attributeName: 'r',
                      begin: '-0.9s',
                      dur: '1.8s',
                      values: '1; 20',
                      calcMode: 'spline',
                      keyTimes: '0; 1',
                      keySplines: '0.165, 0.84, 0.44, 1',
                      repeatCount: 'indefinite',
                    }),
                    o.a.createElement('animate', {
                      attributeName: 'stroke-opacity',
                      begin: '-0.9s',
                      dur: '1.8s',
                      values: '1; 0',
                      calcMode: 'spline',
                      keyTimes: '0; 1',
                      keySplines: '0.3, 0.61, 0.355, 1',
                      repeatCount: 'indefinite',
                    }),
                  ),
                ),
              ),
            ),
          );
        };
      function se() {
        var e = Object(C.a)([
          '\n  text-decoration: underline;\n  margin-bottom: 20px;\n  display: block;\n',
        ]);
        return (
          (se = function() {
            return e;
          }),
          e
        );
      }
      function fe() {
        var e = Object(C.a)(['\n  margin-bottom: 40px;\n']);
        return (
          (fe = function() {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(C.a)(['\n  padding: 0 40px;\n']);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      var pe = S.default.div(me()),
        ge = Object(S.default)(ie)(fe()),
        be = Object(S.default)(D.b)(se()),
        ve = function(e) {
          var n = e.onInputChange,
            a = e.address,
            t = e.name,
            r = e.loading,
            c = e.onSubmit,
            i = e.pickedAddress;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Add Place | Nuber'),
            ),
            o.a.createElement(re, { title: 'Add Place', backTo: '/' }),
            o.a.createElement(
              pe,
              null,
              o.a.createElement(
                Z,
                { onSubmit: c },
                o.a.createElement(ge, {
                  placeholder: 'Name',
                  name: 'name',
                  type: 'text',
                  onChange: n,
                  value: t,
                }),
                o.a.createElement(ge, {
                  placeholder: 'Address',
                  name: 'address',
                  type: 'text',
                  onChange: n,
                  value: a,
                }),
                o.a.createElement(
                  be,
                  { to: '/find-address' },
                  'Pick place from map',
                ),
                i &&
                  o.a.createElement(
                    J,
                    { onClick: c },
                    r ? 'Adding place' : 'Add Place',
                  ),
              ),
              r && o.a.createElement(ue, null),
            ),
          );
        };
      function he() {
        var e = Object(C.a)([
          '\n    mutation addPlace(\n      $name: String!\n      $lat: Float!\n      $lng: Float!\n      $address: String!\n      $isFav: Boolean!\n    ) {\n        AddPlace(\n            name: $name\n            lat: $lat\n            lng: $lng\n            address: $address\n            isFav: $isFav\n        ) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (he = function() {
            return e;
          }),
          e
        );
      }
      var Oe = Object(U.a)(he()),
        Ee = function(e) {
          var n = e.location,
            a = e.history,
            t = n.state,
            c = void 0 === t ? {} : t,
            i = Object(r.useState)(c.address || ''),
            l = Object(F.a)(i, 2),
            d = l[0],
            u = l[1],
            s = Object(r.useState)(''),
            f = Object(F.a)(s, 2),
            m = f[0],
            p = f[1],
            g = Object(r.useState)(c.lat || 0),
            v = Object(F.a)(g, 1)[0],
            h = Object(r.useState)(c.lng || 0),
            O = Object(F.a)(h, 1)[0],
            E = Object(w.b)(Oe),
            j = Object(F.a)(E, 2),
            x = j[0],
            k = j[1].loading,
            _ = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  var n, t, r;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              x({
                                refetchQueries: [{ query: K }],
                                variables: {
                                  address: d,
                                  isFav: !1,
                                  lat: v,
                                  lng: O,
                                  name: m,
                                },
                              })
                            );
                          case 3:
                            (n = e.sent),
                              (t = n.data) &&
                                ((r = t.AddPlace).ok &&
                                  (b.b.success('Place added!'),
                                  a.push('/places')),
                                r.error && b.b.error(r.error)),
                              (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 11:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 8]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(ve, {
            onInputChange: function(e) {
              var n = e.target,
                a = n.name,
                t = n.value;
              'address' === a && u(t), 'name' === a && p(t);
            },
            address: d,
            name: m,
            loading: k,
            onSubmit: _,
            pickedAddress: 0 !== v && 0 !== O && '' !== m,
          });
        },
        je = a(31),
        xe = a.n(je);
      function ke() {
        var e = Object(C.a)([
          '\n  background-color: ',
          ';\n  color: white;\n  padding: 10px 20px;\n  align-self: ',
          ';\n  border-radius: ',
          ';\n  margin-bottom: 10px;\n',
        ]);
        return (
          (ke = function() {
            return e;
          }),
          e
        );
      }
      var _e = S.default.div(
          ke(),
          function(e) {
            return e.mine ? e.theme.blue : e.theme.grey;
          },
          function(e) {
            return e.mine ? 'flex-end' : 'flex-start';
          },
          function(e) {
            return e.mine ? '20px 20px 0 20px' : '20px 20px 20px 0';
          },
        ),
        ye = function(e) {
          var n = e.text,
            a = e.mine;
          return o.a.createElement(_e, { mine: a }, n);
        };
      function we() {
        var e = Object(C.a)(['\n  padding: 0 20px;\n']);
        return (
          (we = function() {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = Object(C.a)([
          '\n  height: 80vh;\n  overflow: scroll;\n  padding: 0 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n',
        ]);
        return (
          (Se = function() {
            return e;
          }),
          e
        );
      }
      function Ce() {
        var e = Object(C.a)(['']);
        return (
          (Ce = function() {
            return e;
          }),
          e
        );
      }
      var Ie = S.default.div(Ce()),
        Ne = S.default.div(Se()),
        Pe = S.default.div(we()),
        Me = function(e) {
          var n = e.loading,
            a = e.chatData,
            t = e.userData,
            r = e.messageText,
            c = e.onInputChange,
            i = e.onSubmit,
            l = e.chatContainerRef;
          return o.a.createElement(
            Ie,
            null,
            o.a.createElement(re, { title: 'Chat' }),
            !n &&
              a &&
              t &&
              o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  Ne,
                  { ref: l },
                  a.messages &&
                    a.messages.map(function(e) {
                      return e
                        ? o.a.createElement(ye, {
                            key: e.id,
                            text: e.text,
                            mine: t.id === e.userId,
                          })
                        : null;
                    }),
                ),
                o.a.createElement(
                  Pe,
                  null,
                  o.a.createElement(
                    Z,
                    { onSubmit: i },
                    o.a.createElement(ie, {
                      value: r,
                      placeholder: 'Type your message',
                      onChange: c,
                      name: 'message',
                    }),
                  ),
                ),
              ),
          );
        };
      function Ae() {
        var e = Object(C.a)([
          '\n    subscription messageSubscription {\n        MessageSubscription {\n            id\n            text\n            userId\n        }\n    }\n',
        ]);
        return (
          (Ae = function() {
            return e;
          }),
          e
        );
      }
      function De() {
        var e = Object(C.a)([
          '\n    mutation sendMessage(\n        $text: String!\n        $chatId: Int!\n    ) {\n        SendChatMessage(\n            text: $text   \n            chatId: $chatId\n        ) {\n            ok\n            error\n            message {\n                id\n                text\n                userId\n            }\n        }\n    }\n',
        ]);
        return (
          (De = function() {
            return e;
          }),
          e
        );
      }
      function Re() {
        var e = Object(C.a)([
          '\n  query getChat(\n      $chatId: Int!\n  ) {\n      GetChat(\n          chatId: $chatId\n      ) {\n          ok\n          error\n          chat {\n              id\n              passengerId\n              driverId\n              messages {\n                  id\n                  text\n                  userId\n              }\n          }\n      }\n  }\n',
        ]);
        return (
          (Re = function() {
            return e;
          }),
          e
        );
      }
      var Le = Object(U.a)(Re()),
        Te = Object(U.a)(De()),
        Ge = Object(U.a)(Ae()),
        Fe = function(e) {
          var n = e.history,
            a = Object(R.h)().chatId,
            t = Object(r.useRef)(null),
            c = Object(w.c)(z).data,
            i = Object(w.a)(Le),
            l = Object(F.a)(i, 2),
            d = l[0],
            u = l[1],
            s = u.data,
            f = u.loading,
            m = u.subscribeToMore,
            p = Object(r.useState)(''),
            g = Object(F.a)(p, 2),
            b = g[0],
            v = g[1],
            h = Object(w.b)(Te),
            O = Object(F.a)(h, 1)[0];
          Object(r.useEffect)(
            function() {
              m &&
                m({
                  document: Ge,
                  updateQuery: function(e, n) {
                    var a = n.subscriptionData;
                    if (a.data) {
                      var t = xe.a.cloneDeep(e);
                      return (
                        t.GetChat.chat.messages.push(
                          a.data.MessageSubscription,
                        ),
                        t
                      );
                    }
                    return e;
                  },
                });
            },
            [m],
          ),
            Object(r.useEffect)(
              function() {
                a
                  ? d({ variables: { chatId: parseInt(a, 10) } })
                  : n.replace('/');
              },
              [n, a, d],
            ),
            Object(r.useLayoutEffect)(
              function() {
                t &&
                  t.current &&
                  t.current.scrollTo(0, document.body.scrollHeight);
              },
              [s],
            );
          var E = (function() {
            var e = Object(G.a)(
              T.a.mark(function e() {
                return T.a.wrap(
                  function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            O({
                              variables: { chatId: parseInt(a, 10), text: b },
                            })
                          );
                        case 3:
                          v(''), (e.next = 9);
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(0)),
                            console.error(e.t0);
                        case 9:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 6]],
                );
              }),
            );
            return function() {
              return e.apply(this, arguments);
            };
          })();
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(Me, {
              chatData: s && s.GetChat.chat,
              userData: c && c.GetMyProfile.user,
              loading: f,
              onSubmit: E,
              onInputChange: function(e) {
                v(e.target.value);
              },
              chatContainerRef: t,
              messageText: b,
            }),
          );
        },
        Ue = a(42),
        Be = a.n(Ue);
      function $e() {
        var e = Object(C.a)([
          '\n  color: white;\n  opacity: 0;\n  height: 1px;\n  &:focus {\n    outline: none;\n  }\n',
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      function ze() {
        var e = Object(C.a)([
          '\n  cursor: pointer;\n  height: 80px;\n  width: 80px;\n  border: 2px solid black;\n  border-radius: 50%;\n  margin-bottom: 35px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 28px;\n  overflow: hidden;\n  & img {\n    width: 80px;\n    height: 80px;\n  }\n',
        ]);
        return (
          (ze = function() {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = Object(C.a)(['']);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      var Ve = S.default.div(Ke()),
        He = S.default.label(ze()),
        qe = S.default.input($e()),
        We = function(e) {
          var n = e.uploading,
            a = e.fileUrl,
            t = e.onChange;
          return o.a.createElement(
            Ve,
            null,
            o.a.createElement(qe, {
              id: 'photo',
              type: 'file',
              accept: 'image/*',
              onChange: t,
            }),
            o.a.createElement(
              He,
              { htmlFor: 'photo' },
              n && '\u23f0',
              !n && o.a.createElement('img', { src: a, alt: '' }),
            ),
          );
        };
      function Je() {
        var e = Object(C.a)(['\n  margin-bottom: 30px;\n']);
        return (
          (Je = function() {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = Object(C.a)(['\n  padding: 0 40px;\n']);
        return (
          (Ze = function() {
            return e;
          }),
          e
        );
      }
      function Qe() {
        var e = Object(C.a)(['']);
        return (
          (Qe = function() {
            return e;
          }),
          e
        );
      }
      var Ye = S.default.div(Qe()),
        Xe = Object(S.default)(Z)(Ze()),
        en = Object(S.default)(ie)(Je()),
        nn = function(e) {
          var n = e.firstName,
            a = e.lastName,
            t = e.email,
            r = e.onInputChange,
            c = e.onSubmit,
            i = e.loading,
            l = e.profilePhoto,
            d = e.uploading,
            u = e.onPhotoChange;
          return o.a.createElement(
            Ye,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Edit Account | Number'),
            ),
            o.a.createElement(re, { title: 'Edit Account', backTo: '/' }),
            o.a.createElement(
              Xe,
              { onSubmit: c },
              o.a.createElement(We, {
                uploading: d,
                fileUrl: l || '',
                onChange: u,
              }),
              o.a.createElement(en, {
                type: 'text',
                name: 'firstName',
                value: n,
                onChange: r,
                placeholder: 'First name',
              }),
              o.a.createElement(en, {
                type: 'text',
                name: 'lastName',
                value: a,
                onChange: r,
                placeholder: 'Last name',
              }),
              o.a.createElement(en, {
                type: 'email',
                name: 'email',
                value: t,
                onChange: r,
                placeholder: 'Email',
              }),
              o.a.createElement(J, { type: 'submit' }, 'Update'),
            ),
            i && o.a.createElement(ue, null),
          );
        };
      function an() {
        var e = Object(C.a)([
          '\n    mutation updateProfile(\n        $firstName: String!\n        $lastName: String\n        $email: String\n        $profilePhoto: String\n    ) {\n        UpdateMyProfile(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            profilePhoto: $profilePhoto\n        ) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (an = function() {
            return e;
          }),
          e
        );
      }
      var tn = Object(U.a)(an()),
        rn = function() {
          var e = Object(r.useState)(''),
            n = Object(F.a)(e, 2),
            a = n[0],
            t = n[1],
            c = Object(r.useState)(''),
            i = Object(F.a)(c, 2),
            l = i[0],
            d = i[1],
            u = Object(r.useState)(''),
            s = Object(F.a)(u, 2),
            f = s[0],
            m = s[1],
            p = Object(r.useState)(''),
            g = Object(F.a)(p, 2),
            v = g[0],
            h = g[1],
            O = Object(r.useState)(!1),
            E = Object(F.a)(O, 2),
            j = E[0],
            x = E[1],
            k = Object(w.c)(z).data,
            _ = Object(w.b)(tn),
            y = Object(F.a)(_, 2),
            S = y[0],
            C = y[1].loading;
          Object(r.useEffect)(
            function() {
              if (k) {
                var e = k.GetMyProfile;
                e.ok &&
                  e.user &&
                  (d(e.user.firstName),
                  m(e.user.lastName),
                  t(e.user.email || ''),
                  h(e.user.profilePhoto || ''));
              }
            },
            [k],
          );
          var I = (function() {
              var e = Object(G.a)(
                T.a.mark(function e(n) {
                  var a, t, r, o;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!(a = n.target.files)) {
                              e.next = 22;
                              break;
                            }
                            return (
                              (e.prev = 2),
                              x(!0),
                              (t = new FormData()).append('file', a[0]),
                              t.append('api_key', '311886499722774'),
                              t.append('upload_preset', 'ugzyask7'),
                              t.append('timestamp', String(Date.now() / 1e3)),
                              (e.next = 11),
                              Be.a.post(
                                'https://api.cloudinary.com/v1_1/'.concat(
                                  'dfyuv19ig',
                                  '/upload',
                                ),
                                t,
                              )
                            );
                          case 11:
                            (r = e.sent),
                              console.log(r),
                              r.data && ((o = r.data.secure_url), h(o)),
                              (e.next = 19);
                            break;
                          case 16:
                            (e.prev = 16),
                              (e.t0 = e.catch(2)),
                              console.error(e.t0);
                          case 19:
                            return (e.prev = 19), x(!1), e.finish(19);
                          case 22:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[2, 16, 19, 22]],
                  );
                }),
              );
              return function(n) {
                return e.apply(this, arguments);
              };
            })(),
            N = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  var n, t;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              S({
                                refetchQueries: [{ query: z }],
                                variables: {
                                  email: a,
                                  firstName: l,
                                  lastName: f,
                                  profilePhoto: v,
                                },
                              })
                            );
                          case 3:
                            (n = e.sent).data &&
                              ((t = n.data.UpdateMyProfile).ok
                                ? b.b.success('Profile updated!')
                                : t.error && b.b.error(t.error)),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(nn, {
            email: a,
            firstName: l,
            lastName: f,
            profilePhoto: v,
            onInputChange: function(e) {
              var n = e.target,
                a = n.name,
                r = n.value;
              'email' === a && t(r),
                'firstName' === a && d(r),
                'lastName' === a && m(r),
                'profilePhoto' === a && h(r);
            },
            loading: C,
            onSubmit: N,
            onPhotoChange: I,
            uploading: j,
          });
        };
      function on() {
        var e = Object(C.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (on = function() {
            return e;
          }),
          e
        );
      }
      function cn() {
        var e = Object(C.a)([
          '\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  background-color: black;\n  color: white;\n  padding: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n',
        ]);
        return (
          (cn = function() {
            return e;
          }),
          e
        );
      }
      function ln() {
        var e = Object(C.a)(['\n  font-size: 25px;\n  margin-bottom: 40px;\n']);
        return (
          (ln = function() {
            return e;
          }),
          e
        );
      }
      function dn() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  top: 20px;\n  left: 20px;\n',
        ]);
        return (
          (dn = function() {
            return e;
          }),
          e
        );
      }
      function un() {
        var e = Object(C.a)(['\n  margin-top: 30px;\n  padding: 50px 20px;\n']);
        return (
          (un = function() {
            return e;
          }),
          e
        );
      }
      var sn = S.default.div(un()),
        fn = Object(S.default)(X)(dn()),
        mn = S.default.h2(ln()),
        pn = S.default.button(cn()),
        gn = Object(S.default)(ie)(on()),
        bn = function(e) {
          var n = e.email,
            a = e.password,
            t = e.onInputChange,
            r = e.onSubmit;
          return o.a.createElement(
            sn,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Phone Login | Number'),
            ),
            o.a.createElement(fn, { backTo: '/' }),
            o.a.createElement(mn, null, 'Enter your email'),
            o.a.createElement(
              Z,
              { onSubmit: r },
              o.a.createElement(gn, {
                placeholder: 'your@email.com',
                type: 'email',
                name: 'email',
                value: n,
                onChange: t,
              }),
              o.a.createElement(gn, {
                placeholder: 'password',
                type: 'password',
                name: 'password',
                value: a,
                onChange: t,
              }),
              o.a.createElement(
                pn,
                null,
                o.a.createElement(
                  'svg',
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '24',
                    height: '24',
                    viewBox: '0 0 24 24',
                    fill: 'white',
                  },
                  o.a.createElement('path', {
                    d:
                      'M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z',
                  }),
                ),
              ),
            ),
          );
        };
      function vn() {
        var e = Object(C.a)([
          '\n    mutation emailSignIn(\n        $email: String!\n        $password: String!\n    ) {\n        EmailSignIn (\n            email: $email\n            password: $password\n        ) {\n            ok\n            error\n            token\n        }\n    }\n',
        ]);
        return (
          (vn = function() {
            return e;
          }),
          e
        );
      }
      var hn = Object(U.a)(vn()),
        On = function() {
          var e = Object(r.useState)(''),
            n = Object(F.a)(e, 2),
            a = n[0],
            t = n[1],
            c = Object(r.useState)(''),
            i = Object(F.a)(c, 2),
            l = i[0],
            d = i[1],
            u = Object(w.b)(hn),
            s = Object(F.a)(u, 2),
            f = s[0],
            m = s[1].loading,
            p = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  var n, t;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              console.log('submit'),
                              (e.prev = 1),
                              (e.next = 4),
                              f({ variables: { email: a, password: l } })
                            );
                          case 4:
                            (n = e.sent),
                              console.log(n),
                              n.data &&
                                ((t = n.data.EmailSignIn).ok ||
                                  b.b.error(t.error)),
                              (e.next = 13);
                            break;
                          case 9:
                            (e.prev = 9),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0),
                              b.b.error(
                                '\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.',
                              );
                          case 13:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 9]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(bn, {
              email: a,
              password: l,
              onInputChange: function(e) {
                var n = e.target,
                  a = n.name,
                  r = n.value;
                'email' === a && t(r), 'password' === a && d(r);
              },
              onSubmit: p,
            }),
            m && o.a.createElement(ue, null),
          );
        },
        En = a(48),
        jn = (function() {
          var e = Object(G.a)(
            T.a.mark(function e(n) {
              var a, t, r, o, c, i, l, d;
              return T.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (a = 'https://maps.googleapis.com/maps/api/geocode/json?address='
                            .concat(n, '&key=')
                            .concat('AIzaSyCw8klGs8wdLtsDDBBItXUyb7j_VZUnUkI')),
                          (e.prev = 1),
                          (e.next = 4),
                          Be.a.get(a)
                        );
                      case 4:
                        if ((t = e.sent).data.error_message) {
                          e.next = 13;
                          break;
                        }
                        if (!((r = t.data.results) && r.length > 0)) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (o = r[0]),
                          (c = o.formatted_address),
                          (i = o.geometry.location),
                          (l = i.lat),
                          (d = i.lng),
                          e.abrupt('return', {
                            formatted_address: c,
                            lat: l,
                            lng: d,
                          })
                        );
                      case 11:
                        e.next = 14;
                        break;
                      case 13:
                        b.b.error(t.data.error_message);
                      case 14:
                        e.next = 19;
                        break;
                      case 16:
                        (e.prev = 16), (e.t0 = e.catch(1)), console.error(e.t0);
                      case 19:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 16]],
              );
            }),
          );
          return function(n) {
            return e.apply(this, arguments);
          };
        })(),
        xn = (function() {
          var e = Object(G.a)(
            T.a.mark(function e(n, a) {
              var t, r, o, c;
              return T.a.wrap(
                function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
                            .concat(n, ',')
                            .concat(a, '&key=')
                            .concat('AIzaSyCw8klGs8wdLtsDDBBItXUyb7j_VZUnUkI')),
                          (e.prev = 1),
                          (e.next = 4),
                          Be.a.get(t)
                        );
                      case 4:
                        if ((r = e.sent).data.error_message) {
                          e.next = 11;
                          break;
                        }
                        return (
                          (o = r.data.results),
                          (c = o[0]),
                          e.abrupt('return', c.formatted_address)
                        );
                      case 11:
                        b.b.error(r.data.error_message);
                      case 12:
                        e.next = 17;
                        break;
                      case 14:
                        (e.prev = 14), (e.t0 = e.catch(1)), console.error(e.t0);
                      case 17:
                      case 'end':
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 14]],
              );
            }),
          );
          return function(n, a) {
            return e.apply(this, arguments);
          };
        })();
      function kn() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  background-color: white;\n  border-radius: 5px;\n  -webkit-appearance: none;\n  z-index: 20;\n  width: 80%;\n  border: 0;\n  font-size: 16px;\n  padding: 15px 10px;\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  margin: auto;\n  top: 10px;\n  left: 0;\n  right: 0;\n  height: auto;\n',
        ]);
        return (
          (kn = function() {
            return e;
          }),
          e
        );
      }
      var _n = S.default.input(kn()),
        yn = function(e) {
          var n = e.value,
            a = e.onBlur,
            t = e.onChange,
            r = e.name;
          return o.a.createElement(_n, {
            value: n,
            onBlur: a,
            onChange: t,
            placeholder: 'Type address',
            name: r,
          });
        };
      function wn() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 10;\n  height: auto;\n  width: 80%;\n',
        ]);
        return (
          (wn = function() {
            return e;
          }),
          e
        );
      }
      function Sn() {
        var e = Object(C.a)([
          '\n  display: block;\n  position: absolute;\n  z-index: 20;\n  top: 50%;\n  left: 50%;\n  font-size: 30px;\n  transform: translate(-50%, -50%);\n',
        ]);
        return (
          (Sn = function() {
            return e;
          }),
          e
        );
      }
      function Cn() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 10;\n  height: 100vh;\n',
        ]);
        return (
          (Cn = function() {
            return e;
          }),
          e
        );
      }
      var In = S.default.div(Cn()),
        Nn = S.default.div(Sn()),
        Pn = Object(S.default)(J)(wn()),
        Mn = function(e) {
          var n = e.mapRef,
            a = e.address,
            t = e.onAddressBlur,
            r = e.onAddressChange,
            c = e.onPickPlace;
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Find Address | Nuber'),
            ),
            o.a.createElement(yn, {
              value: a,
              onBlur: t,
              name: 'address',
              onChange: r,
            }),
            o.a.createElement(In, { ref: n }),
            o.a.createElement(Pn, { onClick: c }, 'Pick this place'),
            o.a.createElement(
              Nn,
              null,
              o.a.createElement(
                'span',
                { role: 'img', 'aria-label': 'marker' },
                '\ud83d\udccd',
              ),
            ),
          );
        },
        An = function(e) {
          var n = e.google,
            a = e.history,
            t = Object(r.useRef)(),
            c = Object(r.useRef)(),
            i = Object(r.useState)(''),
            l = Object(F.a)(i, 2),
            d = l[0],
            u = l[1],
            s = Object(r.useCallback)(
              Object(G.a)(
                T.a.mark(function e() {
                  var n, a, t;
                  return T.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!c.current) {
                            e.next = 6;
                            break;
                          }
                          return (
                            (n = c.current),
                            (a = n.getCenter().lat()),
                            (t = n.getCenter().lng()),
                            (e.next = 6),
                            b(a, t)
                          );
                        case 6:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              ),
              [],
            ),
            f = Object(r.useCallback)(
              function(e, a) {
                var r = {
                  center: { lat: e, lng: a },
                  disableDefaultUI: !0,
                  zoom: 15,
                };
                (c.current = new n.maps.Map(t.current, r)),
                  c.current.addListener('dragend', s);
              },
              [t, n, s],
            ),
            m = Object(r.useCallback)(
              (function() {
                var e = Object(G.a)(
                  T.a.mark(function e(n) {
                    var a, t, r;
                    return T.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = n.coords),
                              (t = a.latitude),
                              (r = a.longitude),
                              f(t, r),
                              (e.next = 4),
                              b(t, r)
                            );
                          case 4:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(n) {
                  return e.apply(this, arguments);
                };
              })(),
              [f],
            ),
            p = Object(r.useCallback)(function(e) {
              console.error(e);
            }, []),
            g = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  var a;
                  return T.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), jn(d);
                        case 2:
                          (a = e.sent) &&
                            (u(a.formatted_address),
                            c.current &&
                              c.current.panTo(new n.maps.LatLng(a.lat, a.lng)));
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          Object(r.useEffect)(
            function() {
              navigator.geolocation.getCurrentPosition(m, p);
            },
            [m, p],
          );
          var b = (function() {
            var e = Object(G.a)(
              T.a.mark(function e(n, a) {
                var t;
                return T.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), xn(n, a);
                      case 2:
                        (t = e.sent), u(t || '');
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function(n, a) {
              return e.apply(this, arguments);
            };
          })();
          return o.a.createElement(Mn, {
            mapRef: t,
            address: d,
            onAddressChange: function(e) {
              u(e.target.value);
            },
            onAddressBlur: g,
            onPickPlace: function() {
              if (c.current) {
                var e = c.current.getCenter().lat(),
                  n = c.current.getCenter().lng();
                a.push('/add-place', { lat: e, lng: n, address: d });
              }
            },
          });
        },
        Dn = Object(En.GoogleApiWrapper)({
          apiKey: 'AIzaSyCw8klGs8wdLtsDDBBItXUyb7j_VZUnUkI',
        })(An),
        Rn = a(80);
      function Ln() {
        var e = Object(C.a)([
          '\n  -webkit-appearance: none;\n  background-color: ',
          ';\n  width: 100%;\n  color: white;\n  font-size: 18px;\n  border: 0;\n  padding: 15px 0;\n  cursor: pointer;\n',
        ]);
        return (
          (Ln = function() {
            return e;
          }),
          e
        );
      }
      function Tn() {
        var e = Object(C.a)([
          '\n  display: grid;\n  grid-template-columns: 1fr 2fr;\n  grid-gap: 10px;\n  height: 100%;\n  align-items: center;\n',
        ]);
        return (
          (Tn = function() {
            return e;
          }),
          e
        );
      }
      function Gn() {
        var e = Object(C.a)([
          '\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n',
        ]);
        return (
          (Gn = function() {
            return e;
          }),
          e
        );
      }
      function Fn() {
        var e = Object(C.a)(['\n  font-size: 18px;\n  color: white;\n']);
        return (
          (Fn = function() {
            return e;
          }),
          e
        );
      }
      function Un() {
        var e = Object(C.a)([
          '\n  font-size: 22px;\n  color: white;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n',
        ]);
        return (
          (Un = function() {
            return e;
          }),
          e
        );
      }
      function Bn() {
        var e = Object(C.a)([
          '\n  height: 80px;\n  width: 80px;\n  background-color: grey;\n  border-radius: 40px;\n  overflow: hidden;\n',
        ]);
        return (
          (Bn = function() {
            return e;
          }),
          e
        );
      }
      function $n() {
        var e = Object(C.a)([
          '\n  font-size: 22px;\n  display: block;\n  margin-left: 15px;\n  margin-bottom: 25px;\n  font-weight: 400;\n',
        ]);
        return (
          ($n = function() {
            return e;
          }),
          e
        );
      }
      function zn() {
        var e = Object(C.a)([
          '\n  background-color: black;\n  height: 20%;\n  margin-bottom: 30px;\n  padding: 0 15px;\n  color: white;\n',
        ]);
        return (
          (zn = function() {
            return e;
          }),
          e
        );
      }
      function Kn() {
        var e = Object(C.a)(['\n  height: 100%;\n']);
        return (
          (Kn = function() {
            return e;
          }),
          e
        );
      }
      var Vn = S.default.div(Kn()),
        Hn = S.default.div(zn()),
        qn = Object(S.default)(D.b)($n()),
        Wn = S.default.img(Bn()),
        Jn = S.default.h2(Un()),
        Zn = S.default.h5(Fn()),
        Qn = S.default.span(Gn()),
        Yn = S.default.div(Tn()),
        Xn = S.default.button(Ln(), function(e) {
          return e.isDriving ? e.theme.yellow : e.theme.green;
        }),
        ea = function(e) {
          var n = e.data,
            a = e.loading,
            t = e.toggleDrivingFn,
            r = ((n || {}).GetMyProfile || {}).user,
            c = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  return T.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), t();
                        case 2:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            Vn,
            null,
            !a &&
              r &&
              o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(
                  Hn,
                  null,
                  o.a.createElement(
                    Yn,
                    null,
                    o.a.createElement(
                      D.b,
                      { to: '/edit-account' },
                      o.a.createElement(Wn, {
                        src:
                          r.profilePhoto ||
                          'https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg',
                      }),
                    ),
                    o.a.createElement(
                      Qn,
                      null,
                      o.a.createElement(Jn, null, r.fullName),
                      o.a.createElement(Zn, null, '4.5'),
                    ),
                  ),
                ),
                o.a.createElement(qn, { to: '/trips' }, 'Your Trips'),
                o.a.createElement(qn, { to: '/settings' }, 'Settings'),
                o.a.createElement(
                  Xn,
                  { isDriving: r.isDriving, onClick: c },
                  r.isDriving ? 'Stop driving' : 'Start driving',
                ),
              ),
          );
        };
      function na() {
        var e = Object(C.a)([
          '\n  mutation toggleDriving {\n      ToggleDrivingMode {\n          ok\n          error\n      }\n  }\n',
        ]);
        return (
          (na = function() {
            return e;
          }),
          e
        );
      }
      var aa = Object(U.a)(na()),
        ta = function() {
          var e = Object(w.c)(z),
            n = e.data,
            a = e.loading,
            t = Object(w.b)(aa, {
              update: function(e, n) {
                if (n.data) {
                  var a = n.data.ToggleDrivingMode;
                  if (a.ok) {
                    var t = e.readQuery({ query: z });
                    if (t) {
                      var r = t.GetMyProfile.user;
                      r && (r.isDriving = !r.isDriving);
                    }
                    e.writeQuery({ query: z, data: t });
                  } else b.b.error(a.error);
                }
              },
            }),
            r = Object(F.a)(t, 1)[0];
          return o.a.createElement(ea, {
            data: n,
            loading: a,
            toggleDrivingFn: r,
          });
        };
      function ra() {
        var e = Object(C.a)([
          '\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n',
        ]);
        return (
          (ra = function() {
            return e;
          }),
          e
        );
      }
      function oa() {
        var e = Object(C.a)([
          '\n  height: 60px;\n  margin-right: 20px;\n  border-radius: 50%;\n',
        ]);
        return (
          (oa = function() {
            return e;
          }),
          e
        );
      }
      function ca() {
        var e = Object(C.a)(['\n  color: ', ';\n']);
        return (
          (ca = function() {
            return e;
          }),
          e
        );
      }
      function ia() {
        var e = Object(C.a)([
          '\n  font-weight: 800;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n',
        ]);
        return (
          (ia = function() {
            return e;
          }),
          e
        );
      }
      function la() {
        var e = Object(C.a)([
          '\n  background-color: white;\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 80%;\n  height: 60%;\n  z-index: 9;\n  padding: 20px;\n',
        ]);
        return (
          (la = function() {
            return e;
          }),
          e
        );
      }
      var da = S.default.div(la()),
        ua = S.default.h4(ia()),
        sa = S.default.span(ca(), function(e) {
          return e.theme.blue;
        }),
        fa = S.default.img(oa()),
        ma = S.default.div(ra()),
        pa = function(e) {
          var n = e.pickUpAddress,
            a = e.dropOffAddress,
            t = e.price,
            r = e.distance,
            c = e.duration,
            i = e.passengerName,
            l = e.passengerPhoto,
            d = e.acceptRideFn,
            u = e.id;
          return o.a.createElement(
            da,
            null,
            o.a.createElement(ua, null, 'Pick Up Address'),
            o.a.createElement(sa, null, n),
            o.a.createElement(ua, null, 'Drop Off Address'),
            o.a.createElement(sa, null, a),
            o.a.createElement(ua, null, 'Price'),
            o.a.createElement(sa, null, t),
            o.a.createElement(ua, null, 'Distance'),
            o.a.createElement(sa, null, r),
            o.a.createElement(ua, null, 'Duration'),
            o.a.createElement(sa, null, c),
            o.a.createElement(ua, null, 'Passenger:'),
            o.a.createElement(
              ma,
              null,
              l && o.a.createElement(fa, { src: l }),
              o.a.createElement(sa, null, i),
            ),
            o.a.createElement(
              J,
              {
                onClick: function() {
                  return d(u);
                },
              },
              'Accept Ride',
            ),
          );
        };
      function ga() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  height: 100%;\n  width: 100%;\n',
        ]);
        return (
          (ga = function() {
            return e;
          }),
          e
        );
      }
      function ba() {
        var e = Object(C.a)(['\n  bottom: 110px;\n']);
        return (
          (ba = function() {
            return e;
          }),
          e
        );
      }
      function va() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  bottom: 50px;\n  left: 0;\n  right: 0;\n  margin: auto;\n  z-index: 10;\n  height: auto;\n  width: 80%;\n',
        ]);
        return (
          (va = function() {
            return e;
          }),
          e
        );
      }
      function ha() {
        var e = Object(C.a)([
          '\n  appearance: none;\n  padding: 10px;\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  text-align: center;\n  font-weight: 800;\n  border: 0;\n  cursor: pointer;\n  font-size: 20px;\n  transform: rotate(90deg);\n  z-index: 2;\n  background-color: transparent;\n',
        ]);
        return (
          (ha = function() {
            return e;
          }),
          e
        );
      }
      function Oa() {
        var e = Object(C.a)(['']);
        return (
          (Oa = function() {
            return e;
          }),
          e
        );
      }
      var Ea = S.default.div(Oa()),
        ja = S.default.button(ha()),
        xa = Object(S.default)(J)(va()),
        ka = Object(S.default)(xa)(ba()),
        _a = S.default.div(ga()),
        ya = function(e) {
          var n = e.isMenuOpen,
            a = e.toggleMenu,
            t = e.loading,
            r = e.toAddress,
            c = e.mapRef,
            i = e.onInputChange,
            l = e.onAddressSubmit,
            d = e.onRequestRide,
            u = e.price,
            s = e.isDriver,
            f = e.nearbyRide,
            m = e.onAcceptRide;
          return o.a.createElement(
            Ea,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Home | Number'),
            ),
            o.a.createElement(
              Rn.a,
              {
                sidebar: o.a.createElement(ta, null),
                open: n,
                onSetOpen: a,
                styles: {
                  sidebar: {
                    backgroundColor: 'white',
                    width: '80%',
                    zIndex: '100',
                  },
                },
              },
              !t && o.a.createElement(ja, { onClick: a }, '|||'),
              !s &&
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  o.a.createElement(yn, {
                    name: 'toAddress',
                    onChange: i,
                    value: r,
                    onBlur: function() {
                      return null;
                    },
                  }),
                  u &&
                    o.a.createElement(
                      ka,
                      { onClick: d, disabled: '' === r },
                      'Request Ride (\u20a9'.concat(
                        u.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'),
                        ')',
                      ),
                    ),
                  o.a.createElement(
                    xa,
                    { onClick: l, disabled: '' === r },
                    u ? 'Change address' : 'Pick Address',
                  ),
                ),
              f &&
                o.a.createElement(pa, {
                  pickUpAddress: f.pickUpAddress,
                  dropOffAddress: f.dropOffAddress,
                  price: f.price,
                  distance: f.distance,
                  duration: f.duration,
                  passengerName: f.passenger.fullName,
                  passengerPhoto: f.passenger.profilePhoto,
                  acceptRideFn: m,
                  id: f.id,
                }),
              o.a.createElement(_a, { ref: c }),
            ),
          );
        };
      function wa() {
        var e = Object(C.a)([
          '\n    subscription nearByRides {\n        NearByRideSubscription {\n            id\n            pickUpAddress\n            dropOffAddress\n            price\n            distance\n            duration\n            passenger {\n                fullName\n                profilePhoto\n            }\n        }\n    }\n',
        ]);
        return (
          (wa = function() {
            return e;
          }),
          e
        );
      }
      function Sa() {
        var e = Object(C.a)([
          '\n    mutation acceptRide(\n        $rideId: Int!\n    ) {\n        UpdateRideStatus(\n            rideId: $rideId\n            status: ACCEPTED\n        ) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (Sa = function() {
            return e;
          }),
          e
        );
      }
      function Ca() {
        var e = Object(C.a)([
          '\n  query getNearByRides {\n      GetNearByRide {\n          ok\n          error\n          ride {\n              id\n              pickUpAddress\n              dropOffAddress\n              price\n              distance\n              duration\n              passenger {\n                  fullName\n                  profilePhoto\n              }\n          }\n      }\n  }\n',
        ]);
        return (
          (Ca = function() {
            return e;
          }),
          e
        );
      }
      function Ia() {
        var e = Object(C.a)([
          '\n    mutation requestRide(\n        $pickUpAddress: String!\n        $pickUpLat: Float!\n        $pickUpLng: Float!\n        $dropOffAddress: String!\n        $dropOffLat: Float!\n        $dropOffLng: Float!\n        $price: Float!\n        $distance: String!\n        $duration: String!\n    ) {\n        RequestRide (\n            pickUpAddress: $pickUpAddress\n            pickUpLat: $pickUpLat\n            pickUpLng: $pickUpLng\n            dropOffAddress: $dropOffAddress\n            dropOffLat: $dropOffLat\n            dropOffLng: $dropOffLng\n            price: $price\n            distance: $distance\n            duration: $duration\n        ) {\n            ok\n            error\n            ride {\n                id\n            }\n        }\n    }\n',
        ]);
        return (
          (Ia = function() {
            return e;
          }),
          e
        );
      }
      function Na() {
        var e = Object(C.a)([
          '\n    query getDrivers {\n        GetNearbyDrivers {\n            ok\n            error\n            drivers {\n                id\n                lastLat\n                lastLng\n            }\n        }\n    }\n',
        ]);
        return (
          (Na = function() {
            return e;
          }),
          e
        );
      }
      function Pa() {
        var e = Object(C.a)([
          '\n    mutation reportMovement(\n        $lat: Float!\n        $lng: Float!\n        $orientation: Float\n    ) {\n        ReportMovement(\n            lat: $lat\n            lng: $lng\n            orientation: $orientation\n        ) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (Pa = function() {
            return e;
          }),
          e
        );
      }
      var Ma = Object(U.a)(Pa()),
        Aa = Object(U.a)(Na()),
        Da = Object(U.a)(Ia()),
        Ra = Object(U.a)(Ca()),
        La = Object(U.a)(Sa()),
        Ta = Object(U.a)(wa()),
        Ga = function(e) {
          var n = e.history,
            a = Object(r.useRef)(),
            t = Object(r.useRef)(),
            c = Object(r.useRef)(),
            i = Object(r.useRef)(),
            l = Object(r.useState)(!1),
            d = Object(F.a)(l, 2),
            u = d[0],
            s = d[1],
            f = Object(w.c)(z),
            m = f.data,
            p = f.loading,
            g = Object(r.useState)(''),
            v = Object(F.a)(g, 2),
            h = v[0],
            O = v[1],
            E = Object(r.useState)(''),
            j = Object(F.a)(E, 2),
            x = j[0],
            k = j[1],
            _ = Object(r.useRef)(),
            y = Object(r.useState)(!1),
            S = Object(F.a)(y, 2),
            C = S[0],
            I = S[1],
            N = Object(r.useState)(),
            P = Object(F.a)(N, 2),
            M = P[0],
            A = P[1],
            D = Object(r.useState)(),
            R = Object(F.a)(D, 2),
            L = R[0],
            U = R[1],
            B = Object(w.b)(Ma),
            $ = Object(F.a)(B, 1)[0],
            K = Object(w.a)(Aa, { pollInterval: 2e3 }),
            V = Object(F.a)(K, 2),
            H = V[0],
            q = V[1].data,
            W = Object(r.useRef)([]),
            J = Object(w.b)(Da),
            Z = Object(F.a)(J, 2),
            Q = Z[0],
            Y = Z[1].loading,
            X = Object(w.a)(Ra),
            ee = Object(F.a)(X, 2),
            ne = ee[0],
            ae = ee[1],
            te = ae.data,
            re = ae.subscribeToMore,
            oe = Object(r.useState)(!1),
            ce = Object(F.a)(oe, 2),
            ie = ce[0],
            le = ce[1],
            de = Object(w.b)(La),
            se = Object(F.a)(de, 2),
            fe = se[0],
            me = se[1].loading;
          Object(r.useEffect)(
            function() {
              ie &&
                te &&
                re({
                  document: Ta,
                  updateQuery: function(e, n) {
                    var a = n.subscriptionData;
                    if (a.data) {
                      var t = xe.a.cloneDeep(e);
                      return (
                        (t.GetNearByRide.ride = a.data.NearByRideSubscription),
                        t
                      );
                    }
                    return e;
                  },
                });
            },
            [ie, te, re],
          ),
            Object(r.useEffect)(
              function() {
                if (q) {
                  var e = q.GetNearbyDrivers.drivers;
                  e &&
                    e.forEach(function(e) {
                      if (e && e.lastLat && e.lastLng) {
                        var n = W.current.find(function(n) {
                          return n.get('ID') === e.id;
                        });
                        if (n)
                          n.setPosition({ lat: e.lastLat, lng: e.lastLng });
                        else {
                          var a = {
                              icon: {
                                path:
                                  google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
                                scale: 5,
                              },
                              position: { lat: e.lastLat, lng: e.lastLng },
                            },
                            r = new google.maps.Marker(a);
                          t.current &&
                            (r.set('ID', e.id),
                            r.setMap(t.current),
                            W.current.push(r));
                        }
                      }
                    });
                }
              },
              [q],
            );
          var pe = Object(r.useMemo)(
            function() {
              if (M) return 120 * parseFloat(M.replace('.', ''));
            },
            [M],
          );
          Object(r.useEffect)(
            function() {
              if (m) {
                var e = m.GetMyProfile.user;
                e && (e.isDriving ? (le(!0), ne()) : H());
              }
            },
            [m, H, ne, re],
          );
          var ge = Object(r.useCallback)(
              function(e, n) {
                var r = {
                  center: { lat: e, lng: n },
                  disableDefaultUI: !0,
                  zoom: 15,
                };
                t.current = new google.maps.Map(a.current, r);
                var o = {
                  icon: { path: google.maps.SymbolPath.CIRCLE, scale: 7 },
                  position: { lat: e, lng: n },
                };
                (c.current = new google.maps.Marker(o)),
                  c.current.setMap(t.current);
              },
              [a],
            ),
            be = Object(r.useCallback)(
              (function() {
                var e = Object(G.a)(
                  T.a.mark(function e(n) {
                    var a, t;
                    return T.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (a = n.coords),
                              ge(a.latitude, a.longitude),
                              (e.next = 4),
                              xn(a.latitude, a.longitude)
                            );
                          case 4:
                            (t = e.sent) && k(t);
                          case 6:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  }),
                );
                return function(n) {
                  return e.apply(this, arguments);
                };
              })(),
              [ge],
            ),
            ve = Object(r.useCallback)(
              function(e) {
                var n = e.coords,
                  a = n.latitude,
                  r = n.longitude,
                  o = new google.maps.LatLng(a, r);
                c.current && c.current.setPosition(o),
                  t.current && t.current.panTo(o),
                  $({ variables: { lat: a, lng: r } });
              },
              [$],
            ),
            he = Object(r.useCallback)(function(e) {
              console.error(e);
            }, []),
            Oe = Object(r.useCallback)(function(e) {
              console.error(e);
            }, []);
          Object(r.useEffect)(
            function() {
              navigator.geolocation.getCurrentPosition(be, he),
                navigator.geolocation.watchPosition(ve, Oe, {
                  enableHighAccuracy: !0,
                });
            },
            [be, he, ve, Oe],
          );
          var Ee = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  var n, a, r;
                  return T.a.wrap(function(e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), jn(h);
                        case 2:
                          (n = e.sent) &&
                            (O(n.formatted_address),
                            i.current && i.current.setMap(null),
                            (a = { position: { lat: n.lat, lng: n.lng } }),
                            (i.current = new google.maps.Marker(a)),
                            i.current.setMap(t.current),
                            (r = new google.maps.LatLngBounds()).extend(
                              new google.maps.LatLng(
                                c.current.getPosition().lat(),
                                c.current.getPosition().lng(),
                              ),
                            ),
                            r.extend(new google.maps.LatLng(n.lat, n.lng)),
                            t.current.fitBounds(r),
                            je());
                        case 4:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            je = function() {
              var e = new google.maps.LatLng(
                  c.current.getPosition().lat(),
                  c.current.getPosition().lng(),
                ),
                n = new google.maps.LatLng(
                  i.current.getPosition().lat(),
                  i.current.getPosition().lng(),
                );
              _.current && _.current.setMap(null);
              _.current = new google.maps.DirectionsRenderer({
                polylineOptions: { strokeColor: '#000' },
                suppressMarkers: !0,
              });
              var a = new google.maps.DirectionsService(),
                r = {
                  destination: n,
                  origin: e,
                  travelMode: google.maps.TravelMode.TRANSIT,
                };
              I(!0),
                a.route(r, function(e, n) {
                  if ((I(!1), n === google.maps.DirectionsStatus.OK)) {
                    var a = e.routes[0].legs[0],
                      r = a.distance.text,
                      o = a.duration.text;
                    A(r),
                      U(o),
                      _.current.setDirections(e),
                      _.current.setMap(t.current);
                  } else b.b.error('There is no route there, you have to swim');
                });
            },
            ke = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  var a, t, r, o, l, d;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (
                              ((a = c.current.getPosition().lat()),
                              (t = c.current.getPosition().lng()),
                              (r = i.current.getPosition().lat()),
                              (o = i.current.getPosition().lng()),
                              (e.prev = 4),
                              !(M && L && pe))
                            ) {
                              e.next = 12;
                              break;
                            }
                            return (
                              (e.next = 8),
                              Q({
                                variables: {
                                  distance: M,
                                  dropOffAddress: h,
                                  dropOffLat: r,
                                  dropOffLng: o,
                                  duration: L,
                                  pickUpAddress: x,
                                  pickUpLat: a,
                                  pickUpLng: t,
                                  price: pe,
                                },
                              })
                            );
                          case 8:
                            (l = e.sent).data &&
                              ((d = l.data.RequestRide).ok && d.ride
                                ? (b.b.success(
                                    'Drive requested, finding a driver',
                                  ),
                                  n.push('/ride/'.concat(d.ride.id)))
                                : b.b.error(d.error)),
                              (e.next = 13);
                            break;
                          case 12:
                            b.b.warn('Destination is invalid');
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e.catch(4)),
                              console.error(e.t0);
                          case 18:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })(),
            _e = (function() {
              var e = Object(G.a)(
                T.a.mark(function e(a) {
                  var t;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              fe({ variables: { rideId: a } })
                            );
                          case 3:
                            (t = e.sent).data &&
                              t.data.UpdateRideStatus.ok &&
                              n.push('/ride/'.concat(a)),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 10:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 7]],
                  );
                }),
              );
              return function(n) {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(ya, {
              isMenuOpen: u,
              toggleMenu: function() {
                s(function(e) {
                  return !e;
                });
              },
              loading: p,
              mapRef: a,
              toAddress: h,
              onInputChange: function(e) {
                O(e.target.value);
              },
              onAddressSubmit: Ee,
              onRequestRide: ke,
              price: pe,
              isDriver: ie,
              nearbyRide: te && te.GetNearByRide.ride,
              onAcceptRide: _e,
            }),
            (C || Y || me) && o.a.createElement(ue, null),
          );
        },
        Fa = Object(En.GoogleApiWrapper)({
          apiKey: 'AIzaSyCw8klGs8wdLtsDDBBItXUyb7j_VZUnUkI',
        })(Ga),
        Ua = a(81),
        Ba = a.n(Ua);
      function $a() {
        var e = Object(C.a)(['\n  color: ', ';\n  font-size: 20px;\n']);
        return (
          ($a = function() {
            return e;
          }),
          e
        );
      }
      function za() {
        var e = Object(C.a)([
          '\n  border-top: 1px solid ',
          ';\n  padding: 30px 20px;\n',
        ]);
        return (
          (za = function() {
            return e;
          }),
          e
        );
      }
      function Ka() {
        var e = Object(C.a)(['\n  color: ', ';\n  margin-left: 10px;\n']);
        return (
          (Ka = function() {
            return e;
          }),
          e
        );
      }
      function Va() {
        var e = Object(C.a)(['\n  padding: 20px;\n']);
        return (
          (Va = function() {
            return e;
          }),
          e
        );
      }
      function Ha() {
        var e = Object(C.a)([
          '\n  margin: 50px 0;\n  font-size: 22px;\n  font-weight: 300;\n',
        ]);
        return (
          (Ha = function() {
            return e;
          }),
          e
        );
      }
      function qa() {
        var e = Object(C.a)(['\n  font-size: 30px;\n']);
        return (
          (qa = function() {
            return e;
          }),
          e
        );
      }
      function Wa() {
        var e = Object(C.a)(['']);
        return (
          (Wa = function() {
            return e;
          }),
          e
        );
      }
      function Ja() {
        var e = Object(C.a)(['']);
        return (
          (Ja = function() {
            return e;
          }),
          e
        );
      }
      function Za() {
        var e = Object(C.a)([
          '\n  width: 110px;\n  height: 110px;\n  background-color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);\n  text-transform: uppercase;\n  font-weight: 500;\n  font-size: 25px;\n',
        ]);
        return (
          (Za = function() {
            return e;
          }),
          e
        );
      }
      function Qa() {
        var e = Object(C.a)([
          '\n  height: 70%;\n  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),\n    url(',
          ');\n  display: flex;\n  align-items: center;\n  justify-content: center;\n',
        ]);
        return (
          (Qa = function() {
            return e;
          }),
          e
        );
      }
      function Ya() {
        var e = Object(C.a)(['\n  height: 100vh;\n']);
        return (
          (Ya = function() {
            return e;
          }),
          e
        );
      }
      var Xa = S.default.div(Ya()),
        et = S.default.header(Qa(), Ba.a),
        nt = S.default.div(Za()),
        at = S.default.h1(Ja()),
        tt = S.default.div(Wa()),
        rt = S.default.h2(qa()),
        ot = S.default.div(Ha()),
        ct = S.default.div(Va()),
        it = S.default.span(Ka(), function(e) {
          return e.theme.grey;
        }),
        lt = S.default.div(za(), function(e) {
          return e.theme.grey;
        }),
        dt = S.default.span($a(), function(e) {
          return e.theme.blue;
        }),
        ut = function() {
          return o.a.createElement(
            Xa,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Login | Nuber'),
            ),
            o.a.createElement(
              et,
              null,
              o.a.createElement(nt, null, o.a.createElement(at, null, 'Nuber')),
            ),
            o.a.createElement(
              tt,
              null,
              o.a.createElement(
                D.b,
                { to: '/phone-login' },
                o.a.createElement(
                  ct,
                  null,
                  o.a.createElement(rt, null, 'Get moving with Nuber'),
                  o.a.createElement(
                    ot,
                    null,
                    o.a.createElement(
                      'span',
                      { role: 'img', 'aria-label': 'korea emoji' },
                      '\ud83c\uddf0\ud83c\uddf7',
                    ),
                    ' +82 ',
                    o.a.createElement(it, null, 'Enter your mobile number'),
                  ),
                ),
              ),
              o.a.createElement(
                D.b,
                { to: '/social-login' },
                o.a.createElement(
                  lt,
                  null,
                  o.a.createElement(dt, null, 'Or connect with social'),
                ),
              ),
              o.a.createElement(
                D.b,
                { to: '/email-login' },
                o.a.createElement(
                  lt,
                  null,
                  o.a.createElement(dt, null, 'Or connect with email'),
                ),
              ),
            ),
          );
        },
        st = [
          {
            name: 'Afghanistan',
            dial_code: '+93',
            code: 'AF',
            flag: '\ud83c\udde6\ud83c\uddeb',
          },
          {
            name: '\xc5land Islands',
            dial_code: '+358',
            code: 'AX',
            flag: '\ud83c\udde6\ud83c\uddfd',
          },
          {
            name: 'Albania',
            dial_code: '+355',
            code: 'AL',
            flag: '\ud83c\udde6\ud83c\uddf1',
          },
          {
            name: 'Algeria',
            dial_code: '+213',
            code: 'DZ',
            flag: '\ud83c\udde9\ud83c\uddff',
          },
          {
            name: 'American Samoa',
            flag: '\ud83c\uddfa\ud83c\uddf8',
            dial_code: '+1684',
            code: 'AS',
          },
          {
            name: 'Andorra',
            dial_code: '+376',
            code: 'AD',
            flag: '\ud83c\udde6\ud83c\udde9',
          },
          {
            name: 'Angola',
            dial_code: '+244',
            code: 'AO',
            flag: '\ud83c\udde6\ud83c\uddf4',
          },
          {
            name: 'Anguilla',
            dial_code: '+1264',
            code: 'AI',
            flag: '\ud83c\udde6\ud83c\uddee',
          },
          {
            name: 'Antarctica',
            dial_code: '+672',
            code: 'AQ',
            flag: '\ud83c\udde6\ud83c\uddf6',
          },
          {
            name: 'Antigua and Barbuda',
            dial_code: '+1268',
            code: 'AG',
            flag: '\ud83c\udde6\ud83c\uddec',
          },
          {
            name: 'Argentina',
            dial_code: '+54',
            code: 'AR',
            flag: '\ud83c\udde6\ud83c\uddf7',
          },
          {
            name: 'Armenia',
            dial_code: '+374',
            code: 'AM',
            flag: '\ud83c\udde6\ud83c\uddf2',
          },
          {
            name: 'Aruba',
            dial_code: '+297',
            code: 'AW',
            flag: '\ud83c\udde6\ud83c\uddfc',
          },
          {
            name: 'Australia',
            dial_code: '+61',
            code: 'AU',
            flag: '\ud83c\udde6\ud83c\uddfa',
          },
          {
            name: 'Austria',
            dial_code: '+43',
            code: 'AT',
            flag: '\ud83c\udde6\ud83c\uddf9',
          },
          {
            name: 'Azerbaijan',
            dial_code: '+994',
            code: 'AZ',
            flag: '\ud83c\udde6\ud83c\uddff',
          },
          {
            name: 'Bahamas',
            dial_code: '+1242',
            code: 'BS',
            flag: '\ud83c\udde7\ud83c\uddf8',
          },
          {
            name: 'Bahrain',
            dial_code: '+973',
            code: 'BH',
            flag: '\ud83c\udde7\ud83c\uddf8',
          },
          {
            name: 'Bangladesh',
            dial_code: '+880',
            code: 'BD',
            flag: '\ud83c\udde7\ud83c\udde9',
          },
          {
            name: 'Barbados',
            dial_code: '+1246',
            code: 'BB',
            flag: '\ud83c\udde7\ud83c\udde7',
          },
          {
            name: 'Belarus',
            dial_code: '+375',
            code: 'BY',
            flag: '\ud83c\udde7\ud83c\uddfe',
          },
          {
            name: 'Belgium',
            dial_code: '+32',
            code: 'BE',
            flag: '\ud83c\udde7\ud83c\uddea',
          },
          {
            name: 'Belize',
            dial_code: '+501',
            code: 'BZ',
            flag: '\ud83c\udde7\ud83c\uddff',
          },
          {
            name: 'Benin',
            dial_code: '+229',
            code: 'BJ',
            flag: '\ud83c\udde7\ud83c\uddef',
          },
          {
            name: 'Bermuda',
            dial_code: '+1441',
            code: 'BM',
            flag: '\ud83c\udde7\ud83c\uddf2',
          },
          {
            name: 'Bhutan',
            dial_code: '+975',
            code: 'BT',
            flag: '\ud83c\udde7\ud83c\uddf9',
          },
          {
            name: 'Bolivia, Plurinational State of bolivia',
            dial_code: '+591',
            code: 'BO',
            flag: '\ud83c\udde7\ud83c\uddf4',
          },
          {
            name: 'Bosnia and Herzegovina',
            dial_code: '+387',
            code: 'BA',
            flag: '\ud83c\udde7\ud83c\udde6',
          },
          {
            name: 'Botswana',
            dial_code: '+267',
            code: 'BW',
            flag: '\ud83c\udde7\ud83c\uddfc',
          },
          {
            name: 'Bouvet Island',
            dial_code: '+47',
            code: 'BV',
            flag: '\ud83c\udff3',
          },
          {
            name: 'Brazil',
            dial_code: '+55',
            code: 'BR',
            flag: '\ud83c\udde7\ud83c\uddf7',
          },
          {
            name: 'British Indian Ocean Territory',
            dial_code: '+246',
            code: 'IO',
            flag: '\ud83c\uddee\ud83c\uddf4',
          },
          {
            name: 'Brunei Darussalam',
            dial_code: '+673',
            code: 'BN',
            flag: '\ud83c\udde7\ud83c\uddf3',
          },
          {
            name: 'Bulgaria',
            dial_code: '+359',
            code: 'BG',
            flag: '\ud83c\udde7\ud83c\uddec',
          },
          {
            name: 'Burkina Faso',
            dial_code: '+226',
            code: 'BF',
            flag: '\ud83c\udde7\ud83c\uddeb',
          },
          {
            name: 'Burundi',
            dial_code: '+257',
            code: 'BI',
            flag: '\ud83c\udde7\ud83c\uddee',
          },
          {
            name: 'Cambodia',
            dial_code: '+855',
            code: 'KH',
            flag: '\ud83c\uddf0\ud83c\udded',
          },
          {
            name: 'Cameroon',
            dial_code: '+237',
            code: 'CM',
            flag: '\ud83c\udde8\ud83c\uddf2',
          },
          {
            name: 'Canada',
            dial_code: '+1',
            code: 'CA',
            flag: '\ud83c\udde8\ud83c\udde6',
          },
          {
            name: 'Cape Verde',
            dial_code: '+238',
            code: 'CV',
            flag: '\ud83c\udde8\ud83c\uddfb',
          },
          {
            name: 'Cayman Islands',
            dial_code: '+ 345',
            code: 'KY',
            flag: '\ud83c\uddf0\ud83c\uddfe',
          },
          {
            name: 'Central African Republic',
            dial_code: '+236',
            code: 'CF',
            flag: '\ud83c\udde8\ud83c\uddeb',
          },
          {
            name: 'Chad',
            dial_code: '+235',
            code: 'TD',
            flag: '\ud83c\uddf9\ud83c\udde9',
          },
          {
            name: 'Chile',
            dial_code: '+56',
            code: 'CL',
            flag: '\ud83c\udde8\ud83c\uddf1',
          },
          {
            name: 'China',
            dial_code: '+86',
            code: 'CN',
            flag: '\ud83c\udde8\ud83c\uddf3',
          },
          {
            name: 'Christmas Island',
            dial_code: '+61',
            code: 'CX',
            flag: '\ud83c\udde8\ud83c\uddfd',
          },
          {
            name: 'Cocos (Keeling) Islands',
            dial_code: '+61',
            code: 'CC',
            flag: '\ud83c\udde8\ud83c\udde8',
          },
          { name: 'Colombia', dial_code: '+57', code: 'CO', flag: '' },
          {
            name: 'Comoros',
            dial_code: '+269',
            code: 'KM',
            flag: '\ud83c\uddf0\ud83c\uddf2',
          },
          {
            name: 'Congo',
            dial_code: '+242',
            code: 'CG',
            flag: '\ud83c\udde8\ud83c\uddec',
          },
          {
            name: 'Congo, The Democratic Republic of the Congo',
            dial_code: '+243',
            code: 'CD',
            flag: '\ud83c\udde8\ud83c\udde9',
          },
          {
            name: 'Cook Islands',
            dial_code: '+682',
            code: 'CK',
            flag: '\ud83c\udde8\ud83c\uddf0',
          },
          {
            name: 'Costa Rica',
            dial_code: '+506',
            code: 'CR',
            flag: '\ud83c\udde8\ud83c\uddf7',
          },
          {
            name: "Cote d'Ivoire",
            dial_code: '+225',
            code: 'CI',
            flag: '\ud83c\udde8\ud83c\uddee',
          },
          {
            name: 'Croatia',
            dial_code: '+385',
            code: 'HR',
            flag: '\ud83c\udded\ud83c\uddf7',
          },
          {
            name: 'Cuba',
            dial_code: '+53',
            code: 'CU',
            flag: '\ud83c\udde8\ud83c\uddfa',
          },
          {
            name: 'Cyprus',
            dial_code: '+357',
            code: 'CY',
            flag: '\ud83c\udde8\ud83c\uddfe',
          },
          {
            name: 'Czech Republic',
            dial_code: '+420',
            code: 'CZ',
            flag: '\ud83c\udde8\ud83c\uddff',
          },
          {
            name: 'Denmark',
            dial_code: '+45',
            code: 'DK',
            flag: '\ud83c\udde9\ud83c\uddf0',
          },
          {
            name: 'Djibouti',
            dial_code: '+253',
            code: 'DJ',
            flag: '\ud83c\udde9\ud83c\uddef',
          },
          {
            name: 'Dominica',
            dial_code: '+1767',
            code: 'DM',
            flag: '\ud83c\udde9\ud83c\uddf2',
          },
          {
            name: 'Dominican Republic',
            dial_code: '+1849',
            code: 'DO',
            flag: '\ud83c\udde8\ud83c\udde9',
          },
          {
            name: 'Ecuador',
            dial_code: '+593',
            code: 'EC',
            flag: '\ud83c\uddea\ud83c\udde8',
          },
          {
            name: 'Egypt',
            dial_code: '+20',
            code: 'EG',
            flag: '\ud83c\uddea\ud83c\uddec',
          },
          {
            name: 'El Salvador',
            dial_code: '+503',
            code: 'SV',
            flag: '\ud83c\uddf8\ud83c\uddfb',
          },
          {
            name: 'Equatorial Guinea',
            dial_code: '+240',
            code: 'GQ',
            flag: '\ud83c\uddec\ud83c\uddf6',
          },
          {
            name: 'Eritrea',
            dial_code: '+291',
            code: 'ER',
            flag: '\ud83c\uddea\ud83c\uddf7',
          },
          {
            name: 'Estonia',
            dial_code: '+372',
            code: 'EE',
            flag: '\ud83c\uddea\ud83c\uddea',
          },
          {
            name: 'Ethiopia',
            dial_code: '+251',
            code: 'ET',
            flag: '\ud83c\uddea\ud83c\uddf9',
          },
          {
            name: 'Falkland Islands (Malvinas)',
            dial_code: '+500',
            code: 'FK',
            flag: '\ud83c\uddeb\ud83c\uddf0',
          },
          { name: 'Faroe Islands', dial_code: '+298', code: 'FO', flag: '' },
          {
            name: 'Fiji',
            dial_code: '+679',
            code: 'FJ',
            flag: '\ud83c\uddeb\ud83c\uddef',
          },
          {
            name: 'Finland',
            dial_code: '+358',
            code: 'FI',
            flag: '\ud83c\uddeb\ud83c\uddee',
          },
          {
            name: 'France',
            dial_code: '+33',
            code: 'FR',
            flag: '\ud83c\uddeb\ud83c\uddf7',
          },
          {
            name: 'French Guiana',
            dial_code: '+594',
            code: 'GF',
            flag: '\ud83c\uddec\ud83c\uddeb',
          },
          {
            name: 'French Polynesia',
            dial_code: '+689',
            code: 'PF',
            flag: '\ud83c\uddf5\ud83c\uddeb',
          },
          {
            name: 'French Southern Territories',
            dial_code: '+262',
            code: 'TF',
            flag: '\ud83c\uddf9\ud83c\uddeb',
          },
          {
            name: 'Gabon',
            dial_code: '+241',
            code: 'GA',
            flag: '\ud83c\uddec\ud83c\udde6',
          },
          {
            name: 'Gambia',
            dial_code: '+220',
            code: 'GM',
            flag: '\ud83c\uddec\ud83c\uddf2',
          },
          {
            name: 'Georgia',
            dial_code: '+995',
            code: 'GE',
            flag: '\ud83c\uddec\ud83c\uddea',
          },
          {
            name: 'Germany',
            dial_code: '+49',
            code: 'DE',
            flag: '\ud83c\udde9\ud83c\uddea',
          },
          {
            name: 'Ghana',
            dial_code: '+233',
            code: 'GH',
            flag: '\ud83c\uddec\ud83c\udded',
          },
          {
            name: 'Gibraltar',
            dial_code: '+350',
            code: 'GI',
            flag: '\ud83c\uddec\ud83c\uddee',
          },
          {
            name: 'Greece',
            dial_code: '+30',
            code: 'GR',
            flag: '\ud83c\uddec\ud83c\uddf7',
          },
          {
            name: 'Greenland',
            dial_code: '+299',
            code: 'GL',
            flag: '\ud83c\uddec\ud83c\uddf1',
          },
          {
            name: 'Grenada',
            dial_code: '+1473',
            code: 'GD',
            flag: '\ud83c\uddec\ud83c\udde9',
          },
          {
            name: 'Guadeloupe',
            dial_code: '+590',
            code: 'GP',
            flag: '\ud83c\uddec\ud83c\uddf5',
          },
          {
            name: 'Guam',
            dial_code: '+1671',
            code: 'GU',
            flag: '\ud83c\uddec\ud83c\uddfa',
          },
          {
            name: 'Guatemala',
            dial_code: '+502',
            code: 'GT',
            flag: '\ud83c\uddec\ud83c\uddf9',
          },
          {
            name: 'Guernsey',
            dial_code: '+44',
            code: 'GG',
            flag: '\ud83c\uddec\ud83c\uddec',
          },
          {
            name: 'Guinea',
            dial_code: '+224',
            code: 'GN',
            flag: '\ud83c\uddec\ud83c\uddf3',
          },
          {
            name: 'Guinea-Bissau',
            dial_code: '+245',
            code: 'GW',
            flag: '\ud83c\uddec\ud83c\uddfc',
          },
          {
            name: 'Guyana',
            dial_code: '+592',
            code: 'GY',
            flag: '\ud83c\uddec\ud83c\uddfe',
          },
          {
            name: 'Haiti',
            dial_code: '+509',
            code: 'HT',
            flag: '\ud83c\udded\ud83c\uddf9',
          },
          {
            name: 'Heard Island and Mcdonald Islands',
            dial_code: '+0',
            code: 'HM',
            flag: '\ud83c\udff3',
          },
          {
            name: 'Holy See (Vatican City State)',
            dial_code: '+379',
            code: 'VA',
            flag: '\ud83c\uddfb\ud83c\udde6',
          },
          {
            name: 'Honduras',
            dial_code: '+504',
            code: 'HN',
            flag: '\ud83c\udded\ud83c\uddf3',
          },
          {
            name: 'Hong Kong',
            dial_code: '+852',
            code: 'HK',
            flag: '\ud83c\udded\ud83c\uddf0',
          },
          {
            name: 'Hungary',
            dial_code: '+36',
            code: 'HU',
            flag: '\ud83c\udded\ud83c\uddfa',
          },
          {
            name: 'Iceland',
            dial_code: '+354',
            code: 'IS',
            flag: '\ud83c\uddee\ud83c\uddf8',
          },
          {
            name: 'India',
            dial_code: '+91',
            code: 'IN',
            flag: '\ud83c\uddee\ud83c\uddf3',
          },
          {
            name: 'Indonesia',
            dial_code: '+62',
            code: 'ID',
            flag: '\ud83c\uddee\ud83c\udde9',
          },
          {
            name: 'Iran, Islamic Republic of Persian Gulf',
            dial_code: '+98',
            code: 'IR',
            flag: '\ud83c\uddee\ud83c\uddf7',
          },
          {
            name: 'Iraq',
            dial_code: '+964',
            code: 'IQ',
            flag: '\ud83c\uddee\ud83c\uddf6',
          },
          {
            name: 'Ireland',
            dial_code: '+353',
            code: 'IE',
            flag: '\ud83c\uddee\ud83c\uddea',
          },
          {
            name: 'Isle of Man',
            dial_code: '+44',
            code: 'IM',
            flag: '\ud83c\uddee\ud83c\uddf2',
          },
          {
            name: 'Israel',
            dial_code: '+972',
            code: 'IL',
            flag: '\ud83c\uddee\ud83c\uddf1',
          },
          {
            name: 'Italy',
            dial_code: '+39',
            code: 'IT',
            flag: '\ud83c\uddee\ud83c\uddf9',
          },
          {
            name: 'Jamaica',
            dial_code: '+1876',
            code: 'JM',
            flag: '\ud83c\uddef\ud83c\uddf2',
          },
          {
            name: 'Japan',
            dial_code: '+81',
            code: 'JP',
            flag: '\ud83c\uddef\ud83c\uddf5',
          },
          {
            name: 'Jersey',
            dial_code: '+44',
            code: 'JE',
            flag: '\ud83c\uddef\ud83c\uddea',
          },
          {
            name: 'Jordan',
            dial_code: '+962',
            code: 'JO',
            flag: '\ud83c\uddef\ud83c\uddf4',
          },
          {
            name: 'Kazakhstan',
            dial_code: '+7',
            code: 'KZ',
            flag: '\ud83c\uddf0\ud83c\uddff',
          },
          {
            name: 'Kenya',
            dial_code: '+254',
            code: 'KE',
            flag: '\ud83c\uddf0\ud83c\uddea',
          },
          {
            name: 'Kiribati',
            dial_code: '+686',
            code: 'KI',
            flag: '\ud83c\uddf0\ud83c\uddee',
          },
          {
            name: "Korea, Democratic People's Republic of Korea",
            dial_code: '+850',
            code: 'KP',
            flag: '\ud83c\uddf0\ud83c\uddf5',
          },
          {
            name: 'Korea, Republic of South Korea',
            dial_code: '+82',
            code: 'KR',
            flag: '\ud83c\uddf0\ud83c\uddf7',
          },
          {
            name: 'Kosovo',
            dial_code: '+383',
            code: 'XK',
            flag: '\ud83c\uddfd\ud83c\uddf0',
          },
          {
            name: 'Kuwait',
            dial_code: '+965',
            code: 'KW',
            flag: '\ud83c\uddf0\ud83c\uddfc',
          },
          {
            name: 'Kyrgyzstan',
            dial_code: '+996',
            code: 'KG',
            flag: '\ud83c\uddf0\ud83c\uddec',
          },
          {
            name: 'Laos',
            dial_code: '+856',
            code: 'LA',
            flag: '\ud83c\uddf1\ud83c\udde6',
          },
          {
            name: 'Latvia',
            dial_code: '+371',
            code: 'LV',
            flag: '\ud83c\uddf1\ud83c\uddfb',
          },
          {
            name: 'Lebanon',
            dial_code: '+961',
            code: 'LB',
            flag: '\ud83c\uddf1\ud83c\udde7',
          },
          {
            name: 'Lesotho',
            dial_code: '+266',
            code: 'LS',
            flag: '\ud83c\uddf1\ud83c\uddf8',
          },
          {
            name: 'Liberia',
            dial_code: '+231',
            code: 'LR',
            flag: '\ud83c\uddf1\ud83c\uddf7',
          },
          {
            name: 'Libyan Arab Jamahiriya',
            dial_code: '+218',
            code: 'LY',
            flag: '\ud83c\uddf1\ud83c\uddfe',
          },
          {
            name: 'Liechtenstein',
            dial_code: '+423',
            code: 'LI',
            flag: '\ud83c\uddf1\ud83c\uddee',
          },
          {
            name: 'Lithuania',
            dial_code: '+370',
            code: 'LT',
            flag: '\ud83c\uddf1\ud83c\uddf9',
          },
          {
            name: 'Luxembourg',
            dial_code: '+352',
            code: 'LU',
            flag: '\ud83c\uddf1\ud83c\uddfa',
          },
          {
            name: 'Macao',
            dial_code: '+853',
            code: 'MO',
            flag: '\ud83c\uddf2\ud83c\uddf4',
          },
          {
            name: 'Macedonia',
            dial_code: '+389',
            code: 'MK',
            flag: '\ud83c\uddf2\ud83c\uddf0',
          },
          {
            name: 'Madagascar',
            dial_code: '+261',
            code: 'MG',
            flag: '\ud83c\uddf2\ud83c\uddec',
          },
          {
            name: 'Malawi',
            dial_code: '+265',
            code: 'MW',
            flag: '\ud83c\uddf2\ud83c\uddfc',
          },
          {
            name: 'Malaysia',
            dial_code: '+60',
            code: 'MY',
            flag: '\ud83c\uddf2\ud83c\uddfe',
          },
          {
            name: 'Maldives',
            dial_code: '+960',
            code: 'MV',
            flag: '\ud83c\uddf2\ud83c\uddfb',
          },
          {
            name: 'Mali',
            dial_code: '+223',
            code: 'ML',
            flag: '\ud83c\uddf2\ud83c\uddf1',
          },
          {
            name: 'Malta',
            dial_code: '+356',
            code: 'MT',
            flag: '\ud83c\uddf2\ud83c\uddf9',
          },
          {
            name: 'Marshall Islands',
            dial_code: '+692',
            code: 'MH',
            flag: '\ud83c\uddf2\ud83c\udded',
          },
          {
            name: 'Martinique',
            dial_code: '+596',
            code: 'MQ',
            flag: '\ud83c\uddf2\ud83c\uddf6',
          },
          {
            name: 'Mauritania',
            dial_code: '+222',
            code: 'MR',
            flag: '\ud83c\uddf2\ud83c\uddf7',
          },
          {
            name: 'Mauritius',
            dial_code: '+230',
            code: 'MU',
            flag: '\ud83c\uddf2\ud83c\uddfa',
          },
          {
            name: 'Mayotte',
            dial_code: '+262',
            code: 'YT',
            flag: '\ud83c\uddfe\ud83c\uddf9',
          },
          {
            name: 'Mexico',
            dial_code: '+52',
            code: 'MX',
            flag: '\ud83c\uddf2\ud83c\uddfd',
          },
          {
            name: 'Micronesia, Federated States of Micronesia',
            dial_code: '+691',
            code: 'FM',
            flag: '\ud83c\uddeb\ud83c\uddf2',
          },
          {
            name: 'Moldova',
            dial_code: '+373',
            code: 'MD',
            flag: '\ud83c\uddf2\ud83c\udde9',
          },
          {
            name: 'Monaco',
            dial_code: '+377',
            code: 'MC',
            flag: '\ud83c\uddf2\ud83c\udde8',
          },
          {
            name: 'Mongolia',
            dial_code: '+976',
            code: 'MN',
            flag: '\ud83c\uddf2\ud83c\uddf3',
          },
          {
            name: 'Montenegro',
            dial_code: '+382',
            code: 'ME',
            flag: '\ud83c\uddf2\ud83c\uddea',
          },
          {
            name: 'Montserrat',
            dial_code: '+1664',
            code: 'MS',
            flag: '\ud83c\uddf2\ud83c\uddf8',
          },
          {
            name: 'Morocco',
            dial_code: '+212',
            code: 'MA',
            flag: '\ud83c\uddf2\ud83c\udde6',
          },
          {
            name: 'Mozambique',
            dial_code: '+258',
            code: 'MZ',
            flag: '\ud83c\uddf2\ud83c\uddff',
          },
          {
            name: 'Myanmar',
            dial_code: '+95',
            code: 'MM',
            flag: '\ud83c\uddf2\ud83c\uddf2',
          },
          {
            name: 'Namibia',
            dial_code: '+264',
            code: 'NA',
            flag: '\ud83c\uddf3\ud83c\udde6',
          },
          {
            name: 'Nauru',
            dial_code: '+674',
            code: 'NR',
            flag: '\ud83c\uddf3\ud83c\uddf7',
          },
          {
            name: 'Nepal',
            dial_code: '+977',
            code: 'NP',
            flag: '\ud83c\uddf3\ud83c\uddf5',
          },
          {
            name: 'Netherlands',
            dial_code: '+31',
            code: 'NL',
            flag: '\ud83c\uddf3\ud83c\uddf1',
          },
          {
            name: 'Netherlands Antilles',
            dial_code: '+599',
            code: 'AN',
            flag: '\ud83c\uddf3\ud83c\uddf1',
          },
          {
            name: 'New Caledonia',
            dial_code: '+687',
            code: 'NC',
            flag: '\ud83c\uddf3\ud83c\udde8',
          },
          {
            name: 'New Zealand',
            dial_code: '+64',
            code: 'NZ',
            flag: '\ud83c\uddf3\ud83c\uddff',
          },
          {
            name: 'Nicaragua',
            dial_code: '+505',
            code: 'NI',
            flag: '\ud83c\uddf3\ud83c\uddee',
          },
          {
            name: 'Niger',
            dial_code: '+227',
            code: 'NE',
            flag: '\ud83c\uddf3\ud83c\uddea',
          },
          {
            name: 'Nigeria',
            dial_code: '+234',
            code: 'NG',
            flag: '\ud83c\uddf3\ud83c\uddec',
          },
          {
            name: 'Niue',
            dial_code: '+683',
            code: 'NU',
            flag: '\ud83c\uddf3\ud83c\uddfa',
          },
          {
            name: 'Norfolk Island',
            dial_code: '+672',
            code: 'NF',
            flag: '\ud83c\uddf3\ud83c\uddeb',
          },
          {
            name: 'Northern Mariana Islands',
            dial_code: '+1670',
            code: 'MP',
            flag: '\ud83c\udff3',
          },
          {
            name: 'Norway',
            dial_code: '+47',
            code: 'NO',
            flag: '\ud83c\uddf3\ud83c\uddf4',
          },
          {
            name: 'Oman',
            dial_code: '+968',
            code: 'OM',
            flag: '\ud83c\uddf4\ud83c\uddf2',
          },
          {
            name: 'Pakistan',
            dial_code: '+92',
            code: 'PK',
            flag: '\ud83c\uddf5\ud83c\uddf0',
          },
          {
            name: 'Palau',
            dial_code: '+680',
            code: 'PW',
            flag: '\ud83c\uddf5\ud83c\uddfc',
          },
          {
            name: 'Palestinian Territory, Occupied',
            dial_code: '+970',
            code: 'PS',
            flag: '\ud83c\uddf5\ud83c\uddf8',
          },
          {
            name: 'Panama',
            dial_code: '+507',
            code: 'PA',
            flag: '\ud83c\uddf5\ud83c\udde6',
          },
          {
            name: 'Papua New Guinea',
            dial_code: '+675',
            code: 'PG',
            flag: '\ud83c\uddf5\ud83c\uddec',
          },
          {
            name: 'Paraguay',
            dial_code: '+595',
            code: 'PY',
            flag: '\ud83c\uddf5\ud83c\uddfe',
          },
          {
            name: 'Peru',
            dial_code: '+51',
            code: 'PE',
            flag: '\ud83c\uddf5\ud83c\uddea',
          },
          {
            name: 'Philippines',
            dial_code: '+63',
            code: 'PH',
            flag: '\ud83c\uddf5\ud83c\udded',
          },
          {
            name: 'Pitcairn',
            dial_code: '+64',
            code: 'PN',
            flag: '\ud83c\uddf5\ud83c\uddf3',
          },
          {
            name: 'Poland',
            dial_code: '+48',
            code: 'PL',
            flag: '\ud83c\uddf5\ud83c\uddf1',
          },
          {
            name: 'Portugal',
            dial_code: '+351',
            code: 'PT',
            flag: '\ud83c\uddf5\ud83c\uddf9',
          },
          {
            name: 'Puerto Rico',
            dial_code: '+1939',
            code: 'PR',
            flag: '\ud83c\uddf5\ud83c\uddf7',
          },
          {
            name: 'Qatar',
            dial_code: '+974',
            code: 'QA',
            flag: '\ud83c\uddf6\ud83c\udde6',
          },
          {
            name: 'Romania',
            dial_code: '+40',
            code: 'RO',
            flag: '\ud83c\uddf7\ud83c\uddf4',
          },
          {
            name: 'Russia',
            dial_code: '+7',
            code: 'RU',
            flag: '\ud83c\uddf7\ud83c\uddfa',
          },
          {
            name: 'Rwanda',
            dial_code: '+250',
            code: 'RW',
            flag: '\ud83c\uddf7\ud83c\uddfc',
          },
          {
            name: 'Reunion',
            dial_code: '+262',
            code: 'RE',
            flag: '\ud83c\uddeb\ud83c\uddf7',
          },
          {
            name: 'Saint Barthelemy',
            dial_code: '+590',
            code: 'BL',
            flag: '\ud83c\udde7\ud83c\uddf1',
          },
          {
            name: 'Saint Helena, Ascension and Tristan Da Cunha',
            dial_code: '+290',
            code: 'SH',
            flag: '\ud83c\uddf8\ud83c\udded',
          },
          {
            name: 'Saint Kitts and Nevis',
            dial_code: '+1869',
            code: 'KN',
            flag: '\ud83c\uddf0\ud83c\uddf3',
          },
          {
            name: 'Saint Lucia',
            dial_code: '+1758',
            code: 'LC',
            flag: '\ud83c\uddf1\ud83c\udde8',
          },
          {
            name: 'Saint Martin',
            dial_code: '+590',
            code: 'MF',
            flag: '\ud83c\udff3',
          },
          {
            name: 'Saint Pierre and Miquelon',
            dial_code: '+508',
            code: 'PM',
            flag: '\ud83c\uddf5\ud83c\uddf2',
          },
          {
            name: 'Saint Vincent and the Grenadines',
            dial_code: '+1784',
            code: 'VC',
            flag: '\ud83c\uddfb\ud83c\udde8',
          },
          {
            name: 'Samoa',
            dial_code: '+685',
            code: 'WS',
            flag: '\ud83c\uddfc\ud83c\uddf8',
          },
          {
            name: 'San Marino',
            dial_code: '+378',
            code: 'SM',
            flag: '\ud83c\uddf8\ud83c\uddf2',
          },
          {
            name: 'Sao Tome and Principe',
            dial_code: '+239',
            code: 'ST',
            flag: '\ud83c\uddf8\ud83c\uddf9',
          },
          {
            name: 'Saudi Arabia',
            dial_code: '+966',
            code: 'SA',
            flag: '\ud83c\uddf8\ud83c\udde6',
          },
          {
            name: 'Senegal',
            dial_code: '+221',
            code: 'SN',
            flag: '\ud83c\uddf8\ud83c\uddf3',
          },
          {
            name: 'Serbia',
            dial_code: '+381',
            code: 'RS',
            flag: '\ud83c\uddf7\ud83c\uddf8',
          },
          {
            name: 'Seychelles',
            dial_code: '+248',
            code: 'SC',
            flag: '\ud83c\uddf8\ud83c\udde8',
          },
          {
            name: 'Sierra Leone',
            dial_code: '+232',
            code: 'SL',
            flag: '\ud83c\uddf8\ud83c\uddf1',
          },
          {
            name: 'Singapore',
            dial_code: '+65',
            code: 'SG',
            flag: '\ud83c\uddf8\ud83c\uddec',
          },
          {
            name: 'Slovakia',
            dial_code: '+421',
            code: 'SK',
            flag: '\ud83c\uddf8\ud83c\uddf0',
          },
          {
            name: 'Slovenia',
            dial_code: '+386',
            code: 'SI',
            flag: '\ud83c\uddf8\ud83c\uddee',
          },
          {
            name: 'Solomon Islands',
            dial_code: '+677',
            code: 'SB',
            flag: '\ud83c\uddf8\ud83c\udde7',
          },
          {
            name: 'Somalia',
            dial_code: '+252',
            code: 'SO',
            flag: '\ud83c\uddf8\ud83c\uddf4',
          },
          {
            name: 'South Africa',
            dial_code: '+27',
            code: 'ZA',
            flag: '\ud83c\uddff\ud83c\udde6',
          },
          {
            name: 'South Sudan',
            dial_code: '+211',
            code: 'SS',
            flag: '\ud83c\uddf8\ud83c\uddf8',
          },
          {
            name: 'South Georgia and the South Sandwich Islands',
            dial_code: '+500',
            code: 'GS',
            flag: '\ud83c\uddec\ud83c\uddf8',
          },
          {
            name: 'Spain',
            dial_code: '+34',
            code: 'ES',
            flag: '\ud83c\uddea\ud83c\uddf8',
          },
          {
            name: 'Sri Lanka',
            dial_code: '+94',
            code: 'LK',
            flag: '\ud83c\uddf1\ud83c\uddf0',
          },
          {
            name: 'Sudan',
            dial_code: '+249',
            code: 'SD',
            flag: '\ud83c\uddf8\ud83c\udde9',
          },
          {
            name: 'Suriname',
            dial_code: '+597',
            code: 'SR',
            flag: '\ud83c\uddf8\ud83c\uddf7',
          },
          {
            name: 'Svalbard and Jan Mayen',
            dial_code: '+47',
            code: 'SJ',
            flag: '\ud83c\udde9\ud83c\uddf0',
          },
          {
            name: 'Swaziland',
            dial_code: '+268',
            code: 'SZ',
            flag: '\ud83c\uddf8\ud83c\uddff',
          },
          {
            name: 'Sweden',
            dial_code: '+46',
            code: 'SE',
            flag: '\ud83c\uddf8\ud83c\uddea',
          },
          {
            name: 'Switzerland',
            dial_code: '+41',
            code: 'CH',
            flag: '\ud83c\udde8\ud83c\udded',
          },
          {
            name: 'Syrian Arab Republic',
            dial_code: '+963',
            code: 'SY',
            flag: '\ud83c\uddf8\ud83c\uddfe',
          },
          {
            name: 'Taiwan',
            dial_code: '+886',
            code: 'TW',
            flag: '\ud83c\uddf9\ud83c\uddfc',
          },
          {
            name: 'Tajikistan',
            dial_code: '+992',
            code: 'TJ',
            flag: '\ud83c\uddf9\ud83c\uddef',
          },
          {
            name: 'Tanzania, United Republic of Tanzania',
            dial_code: '+255',
            code: 'TZ',
            flag: '\ud83c\uddf9\ud83c\uddff',
          },
          {
            name: 'Thailand',
            dial_code: '+66',
            code: 'TH',
            flag: '\ud83c\uddf9\ud83c\udded',
          },
          {
            name: 'Timor-Leste',
            dial_code: '+670',
            code: 'TL',
            flag: '\ud83c\uddf9\ud83c\uddf1',
          },
          {
            name: 'Togo',
            dial_code: '+228',
            code: 'TG',
            flag: '\ud83c\uddf9\ud83c\uddec',
          },
          {
            name: 'Tokelau',
            dial_code: '+690',
            code: 'TK',
            flag: '\ud83c\uddf9\ud83c\uddf0',
          },
          {
            name: 'Tonga',
            dial_code: '+676',
            code: 'TO',
            flag: '\ud83c\uddf9\ud83c\uddf4',
          },
          {
            name: 'Trinidad and Tobago',
            dial_code: '+1868',
            code: 'TT',
            flag: '\ud83c\uddf9\ud83c\uddf9',
          },
          {
            name: 'Tunisia',
            dial_code: '+216',
            code: 'TN',
            flag: '\ud83c\uddf9\ud83c\uddf3',
          },
          {
            name: 'Turkey',
            dial_code: '+90',
            code: 'TR',
            flag: '\ud83c\uddf9\ud83c\uddf7',
          },
          {
            name: 'Turkmenistan',
            dial_code: '+993',
            code: 'TM',
            flag: '\ud83c\uddf9\ud83c\uddf2',
          },
          {
            name: 'Turks and Caicos Islands',
            dial_code: '+1649',
            code: 'TC',
            flag: '\ud83c\uddf9\ud83c\udde8',
          },
          {
            name: 'Tuvalu',
            dial_code: '+688',
            code: 'TV',
            flag: '\ud83c\uddf9\ud83c\uddfb',
          },
          {
            name: 'Uganda',
            dial_code: '+256',
            code: 'UG',
            flag: '\ud83c\uddfa\ud83c\uddec',
          },
          {
            name: 'Ukraine',
            dial_code: '+380',
            code: 'UA',
            flag: '\ud83c\uddfa\ud83c\udde6',
          },
          {
            name: 'United Arab Emirates',
            dial_code: '+971',
            code: 'AE',
            flag: '\ud83c\udde6\ud83c\uddea',
          },
          {
            name: 'United Kingdom',
            dial_code: '+44',
            code: 'GB',
            flag: '\ud83c\uddec\ud83c\udde7',
          },
          {
            name: 'United States',
            dial_code: '+1',
            code: 'US',
            flag: '\ud83c\uddfa\ud83c\uddf8',
          },
          {
            name: 'Uruguay',
            dial_code: '+598',
            code: 'UY',
            flag: '\ud83c\uddfa\ud83c\uddfe',
          },
          {
            name: 'Uzbekistan',
            dial_code: '+998',
            code: 'UZ',
            flag: '\ud83c\uddfa\ud83c\uddff',
          },
          {
            name: 'Vanuatu',
            dial_code: '+678',
            code: 'VU',
            flag: '\ud83c\uddfb\ud83c\uddfa',
          },
          {
            name: 'Venezuela, Bolivarian Republic of Venezuela',
            dial_code: '+58',
            code: 'VE',
            flag: '\ud83c\uddfb\ud83c\uddea',
          },
          {
            name: 'Vietnam',
            dial_code: '+84',
            code: 'VN',
            flag: '\ud83c\uddfb\ud83c\uddf3',
          },
          {
            name: 'Virgin Islands, British',
            dial_code: '+1284',
            code: 'VG',
            flag: '\ud83c\uddfb\ud83c\uddec',
          },
          {
            name: 'Virgin Islands, U.S.',
            dial_code: '+1340',
            code: 'VI',
            flag: '\ud83c\uddfb\ud83c\uddee',
          },
          {
            name: 'Wallis and Futuna',
            dial_code: '+681',
            code: 'WF',
            flag: '\ud83c\uddfc\ud83c\uddeb',
          },
          {
            name: 'Yemen',
            dial_code: '+967',
            code: 'YE',
            flag: '\ud83c\uddfe\ud83c\uddea',
          },
          {
            name: 'Zambia',
            dial_code: '+260',
            code: 'ZM',
            flag: '\ud83c\uddff\ud83c\uddf2',
          },
          {
            name: 'Zimbabwe',
            dial_code: '+263',
            code: 'ZW',
            flag: '\ud83c\uddff\ud83c\uddfc',
          },
        ];
      function ft() {
        var e = Object(C.a)([
          '\n  box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);\n  background-color: black;\n  color: white;\n  padding: 20px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: 50px;\n  right: 50px;\n  cursor: pointer;\n',
        ]);
        return (
          (ft = function() {
            return e;
          }),
          e
        );
      }
      function mt() {
        var e = Object(C.a)(['']);
        return (
          (mt = function() {
            return e;
          }),
          e
        );
      }
      function pt() {
        var e = Object(C.a)(['']);
        return (
          (pt = function() {
            return e;
          }),
          e
        );
      }
      function gt() {
        var e = Object(C.a)([
          "\n  font-size: 20px;\n  color: #2c3e50;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  background-color: white;\n  border: 0;\n  font-family: 'Maven Pro', sans-serif;\n  margin-bottom: 20px;\n  width: 90%;\n",
        ]);
        return (
          (gt = function() {
            return e;
          }),
          e
        );
      }
      function bt() {
        var e = Object(C.a)(['\n  font-size: 25px;\n  margin-bottom: 40px;\n']);
        return (
          (bt = function() {
            return e;
          }),
          e
        );
      }
      function vt() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  top: 20px;\n  left: 20px;\n',
        ]);
        return (
          (vt = function() {
            return e;
          }),
          e
        );
      }
      function ht() {
        var e = Object(C.a)(['\n  margin-top: 30px;\n  padding: 50px 20px;\n']);
        return (
          (ht = function() {
            return e;
          }),
          e
        );
      }
      var Ot = S.default.div(ht()),
        Et = Object(S.default)(X)(vt()),
        jt = S.default.h2(bt()),
        xt = S.default.select(gt()),
        kt = S.default.option(pt()),
        _t = S.default.form(mt()),
        yt = S.default.button(ft()),
        wt = function(e) {
          var n = e.countryCode,
            a = e.phoneNumber,
            t = e.onInputChange,
            r = e.onSubmit;
          return o.a.createElement(
            Ot,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Phone Login | Number'),
            ),
            o.a.createElement(Et, { backTo: '/' }),
            o.a.createElement(jt, null, 'Enter your mobile number'),
            o.a.createElement(
              xt,
              { name: 'countryCode', value: n, onChange: t },
              st.map(function(e, n) {
                return o.a.createElement(
                  kt,
                  { key: n, value: e.dial_code },
                  e.flag,
                  ' ',
                  e.name,
                  ' (',
                  e.dial_code,
                  ')',
                );
              }),
            ),
            o.a.createElement(
              _t,
              { onSubmit: r },
              o.a.createElement(ie, {
                placeholder: '053 690 2129',
                name: 'phoneNumber',
                value: a,
                onChange: t,
              }),
              o.a.createElement(
                yt,
                null,
                o.a.createElement(
                  'svg',
                  {
                    xmlns: 'http://www.w3.org/2000/svg',
                    width: '24',
                    height: '24',
                    viewBox: '0 0 24 24',
                    fill: 'white',
                  },
                  o.a.createElement('path', {
                    d:
                      'M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z',
                  }),
                ),
              ),
            ),
          );
        };
      function St() {
        var e = Object(C.a)([
          '\n    mutation startPhoneVerification($phoneNumber: String!) {\n        StartPhoneVerification(phoneNumber: $phoneNumber) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (St = function() {
            return e;
          }),
          e
        );
      }
      var Ct = Object(U.a)(St()),
        It = function() {
          var e = Object(R.g)(),
            n = Object(r.useState)('+82'),
            a = Object(F.a)(n, 2),
            t = a[0],
            c = a[1],
            i = Object(r.useState)(''),
            l = Object(F.a)(i, 2),
            d = l[0],
            u = l[1],
            s = ''.concat(t).concat(d),
            f = Object(w.b)(Ct, { variables: { phoneNumber: s } }),
            m = Object(F.a)(f, 2),
            p = m[0],
            g = m[1].loading,
            v = (function() {
              var n = Object(G.a)(
                T.a.mark(function n(a) {
                  var t, r, o;
                  return T.a.wrap(function(n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (
                            (a.preventDefault(),
                            !/^\+[1-9]{1}[0-9]{7,12}$/.test(s))
                          ) {
                            n.next = 10;
                            break;
                          }
                          return (n.next = 5), p();
                        case 5:
                          (t = n.sent),
                            (r = t.data) &&
                              ((o = r.StartPhoneVerification).ok
                                ? (b.b.success('SMS Sent!'),
                                  e.push({
                                    pathname: '/verify-phone',
                                    state: { phoneNumber: s },
                                  }))
                                : b.b.error(o.error)),
                            (n.next = 11);
                          break;
                        case 10:
                          b.b.error('Please write a valid phone number');
                        case 11:
                        case 'end':
                          return n.stop();
                      }
                  }, n);
                }),
              );
              return function(e) {
                return n.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(wt, {
              countryCode: t,
              phoneNumber: d,
              onInputChange: function(e) {
                var n = e.target,
                  a = n.name,
                  t = n.value;
                'countryCode' === a && c(t), 'phoneNumber' === a && u(t);
              },
              onSubmit: v,
            }),
            g && o.a.createElement(ue, null),
          );
        };
      function Nt() {
        var e = Object(C.a)(['\n  color: ', ';\n  font-size: 14px;\n']);
        return (
          (Nt = function() {
            return e;
          }),
          e
        );
      }
      function Pt() {
        var e = Object(C.a)(['\n  cursor: pointer;\n']);
        return (
          (Pt = function() {
            return e;
          }),
          e
        );
      }
      function Mt() {
        var e = Object(C.a)(['\n  display: block;\n']);
        return (
          (Mt = function() {
            return e;
          }),
          e
        );
      }
      function At() {
        var e = Object(C.a)(['\n  margin-left: 10px;\n']);
        return (
          (At = function() {
            return e;
          }),
          e
        );
      }
      function Dt() {
        var e = Object(C.a)([
          '\n  margin: 15px 0;\n  display: flex;\n  align-items: center;\n  & i {\n    font-size: 12px;\n  }\n',
        ]);
        return (
          (Dt = function() {
            return e;
          }),
          e
        );
      }
      var Rt = S.default.div(Dt()),
        Lt = S.default.div(At()),
        Tt = S.default.span(Mt()),
        Gt = S.default.span(Pt()),
        Ft = S.default.span(Nt(), function(e) {
          return e.theme.grey;
        }),
        Ut = function(e) {
          var n = e.name,
            a = e.address,
            t = e.fav,
            r = e.onClickFav;
          return o.a.createElement(
            Rt,
            null,
            o.a.createElement(Gt, { onClick: r }, t ? '\u2605' : '\u2729'),
            o.a.createElement(
              Lt,
              null,
              o.a.createElement(Tt, null, n),
              o.a.createElement(Ft, null, a),
            ),
          );
        };
      function Bt() {
        var e = Object(C.a)([
          '\n    mutation editPlace(\n        $placeId: Int!\n        $isFav: Boolean!\n    ) {\n        EditPlace(\n            placeId: $placeId\n            isFav: $isFav\n        ) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (Bt = function() {
            return e;
          }),
          e
        );
      }
      var $t = Object(U.a)(Bt()),
        zt = function(e) {
          var n = e.placeId,
            a = e.fav,
            t = e.name,
            r = e.address,
            c = Object(w.b)($t),
            i = Object(F.a)(c, 1)[0],
            l = (function() {
              var e = Object(G.a)(
                T.a.mark(function e() {
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              i({
                                update: function(e, t) {
                                  if (t.data && t.data.EditPlace.ok) {
                                    var r = xe.a.cloneDeep(
                                      e.readQuery({ query: K }),
                                    );
                                    if (r) {
                                      var o = r.GetMyPlaces.places;
                                      if (o) {
                                        var c = o.findIndex(function(e) {
                                          return e.id === n;
                                        });
                                        (o[c].isFav = !a),
                                          console.log(r),
                                          e.writeQuery({ data: r, query: K });
                                      }
                                    }
                                  }
                                },
                                variables: { isFav: !a, placeId: n },
                              })
                            );
                          case 3:
                            e.next = 8;
                            break;
                          case 5:
                            (e.prev = 5),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]],
                  );
                }),
              );
              return function() {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(Ut, {
              name: t,
              address: r,
              fav: a,
              onClickFav: l,
            }),
          );
        };
      function Kt() {
        var e = Object(C.a)(['\n  text-decoration: underline;\n']);
        return (
          (Kt = function() {
            return e;
          }),
          e
        );
      }
      function Vt() {
        var e = Object(C.a)(['\n  padding: 0 40px;\n']);
        return (
          (Vt = function() {
            return e;
          }),
          e
        );
      }
      var Ht,
        qt = S.default.div(Vt()),
        Wt = Object(S.default)(D.b)(Kt()),
        Jt = function(e) {
          var n = e.places,
            a = e.loading;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Places | Number'),
            ),
            o.a.createElement(re, { title: 'Places', backTo: '/' }),
            o.a.createElement(
              qt,
              null,
              !a &&
                n &&
                0 === n.length &&
                o.a.createElement(
                  Wt,
                  { to: '/add-place' },
                  'You have no places',
                ),
              !a &&
                n &&
                n.map(function(e) {
                  return o.a.createElement(zt, {
                    key: e.id,
                    placeId: e.id,
                    fav: e.isFav,
                    name: e.name,
                    address: e.address,
                  });
                }),
              o.a.createElement(Wt, { to: '/add-place' }, 'Add some places!'),
            ),
          );
        },
        Zt = function() {
          var e = Object(w.c)(K),
            n = e.data,
            a = e.loading;
          return o.a.createElement(Jt, {
            places: n && n.GetMyPlaces.places,
            loading: a,
          });
        };
      function Qt() {
        var e = Object(C.a)(['\n  margin-bottom: 30px;\n']);
        return (
          (Qt = function() {
            return e;
          }),
          e
        );
      }
      function Yt() {
        var e = Object(C.a)(['\n  margin: 30px 0;\n']);
        return (
          (Yt = function() {
            return e;
          }),
          e
        );
      }
      function Xt() {
        var e = Object(C.a)([
          '\n  display: flex;\n  align-items: center;\n  margin-bottom: 20px;\n',
        ]);
        return (
          (Xt = function() {
            return e;
          }),
          e
        );
      }
      function er() {
        var e = Object(C.a)([
          '\n  border-radius: 50%;\n  margin-right: 20px;\n  max-width: 50px;\n  height: 50px;\n',
        ]);
        return (
          (er = function() {
            return e;
          }),
          e
        );
      }
      function nr() {
        var e = Object(C.a)(['\n  color: ', ';\n']);
        return (
          (nr = function() {
            return e;
          }),
          e
        );
      }
      function ar() {
        var e = Object(C.a)([
          '\n  font-weight: 800;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  &:first-child {\n    margin-top: 0;\n  }\n',
        ]);
        return (
          (ar = function() {
            return e;
          }),
          e
        );
      }
      function tr() {
        var e = Object(C.a)(['\n  padding: 40px;\n']);
        return (
          (tr = function() {
            return e;
          }),
          e
        );
      }
      !(function(e) {
        (e.ACCEPTED = 'ACCEPTED'),
          (e.CANCELED = 'CANCELED'),
          (e.FINISHED = 'FINISHED'),
          (e.ONROUTE = 'ONROUTE'),
          (e.REQUESTING = 'REQUESTING');
      })(Ht || (Ht = {}));
      var rr = S.default.div(tr()),
        or = S.default.h4(ar()),
        cr = S.default.span(nr(), function(e) {
          return e.theme.blue;
        }),
        ir = S.default.img(er()),
        lr = S.default.div(Xt()),
        dr = S.default.div(Yt()),
        ur = Object(S.default)(J)(Qt()),
        sr = function(e) {
          var n = e.rideData,
            a = e.userData,
            t = e.updateRide,
            r = n && n.driver && a && n.driver.id === a.id,
            c = n && a && n.passenger.id === a.id;
          return o.a.createElement(
            rr,
            null,
            n &&
              a &&
              o.a.createElement(
                o.a.Fragment,
                null,
                o.a.createElement(or, null, 'Passenger'),
                o.a.createElement(
                  lr,
                  null,
                  o.a.createElement(ir, { src: n.passenger.profilePhoto }),
                  o.a.createElement(cr, null, n.passenger.fullName),
                ),
                n.driver &&
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(or, null, 'Driver'),
                    o.a.createElement(
                      lr,
                      null,
                      o.a.createElement(ir, { src: n.driver.profilePhoto }),
                      o.a.createElement(cr, null, n.driver.fullName),
                    ),
                  ),
                o.a.createElement(or, null, 'From'),
                o.a.createElement(cr, null, n.pickUpAddress),
                o.a.createElement(or, null, 'To'),
                o.a.createElement(cr, null, n.dropOffAddress),
                o.a.createElement(or, null, 'Price'),
                o.a.createElement(cr, null, n.price),
                o.a.createElement(or, null, 'Distance'),
                o.a.createElement(cr, null, n.distance),
                o.a.createElement(or, null, 'Duration'),
                o.a.createElement(cr, null, n.duration),
                o.a.createElement(or, null, 'Status'),
                o.a.createElement(cr, null, n.status),
                o.a.createElement(
                  dr,
                  null,
                  r &&
                    'ACCEPTED' === n.status &&
                    o.a.createElement(
                      ur,
                      {
                        onClick: function() {
                          return t(Ht.ONROUTE);
                        },
                      },
                      'Picked Up',
                    ),
                  r &&
                    'ONROUTE' === n.status &&
                    o.a.createElement(
                      ur,
                      {
                        onClick: function() {
                          return t(Ht.FINISHED);
                        },
                      },
                      'Finished',
                    ),
                  (r || c) &&
                    'ACCEPTED' === n.status &&
                    o.a.createElement(
                      D.b,
                      { to: '/chat/'.concat(n.chatId) },
                      o.a.createElement(ur, { onClick: null }, 'Chat'),
                    ),
                ),
              ),
          );
        };
      function fr() {
        var e = Object(C.a)([
          '\n    mutation updateRide(\n        $rideId: Int!\n        $status: StatusOption!\n    ) {\n        UpdateRideStatus(\n            rideId: $rideId\n            status: $status\n        ) {\n            ok\n            error\n        }\n    }\n',
        ]);
        return (
          (fr = function() {
            return e;
          }),
          e
        );
      }
      function mr() {
        var e = Object(C.a)([
          '\n    subscription rideUpdates {\n        RideStatusSubscription {\n            status\n            pickUpAddress\n            dropOffAddress\n            price\n            distance\n            duration\n            driver {\n                id\n                fullName\n                profilePhoto\n            }\n            passenger {\n                id\n                fullName\n                profilePhoto\n            }\n            chatId\n        }\n    }\n',
        ]);
        return (
          (mr = function() {
            return e;
          }),
          e
        );
      }
      function pr() {
        var e = Object(C.a)([
          '\n    query getRide (\n        $rideId: Int!\n    ) {\n        GetRide(\n            rideId: $rideId\n        ) {\n            ok\n            error\n            ride {\n                status\n                pickUpAddress\n                dropOffAddress\n                price\n                distance\n                duration\n                driver {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                passenger {\n                    id\n                    fullName\n                    profilePhoto\n                }\n                chatId\n            }\n        }\n    }\n',
        ]);
        return (
          (pr = function() {
            return e;
          }),
          e
        );
      }
      var gr = Object(U.a)(pr()),
        br = Object(U.a)(mr()),
        vr = Object(U.a)(fr()),
        hr = function(e) {
          var n = e.history,
            a = Object(R.h)().rideId,
            t = Object(w.c)(z).data,
            c = Object(w.c)(gr, {
              skip: !a,
              variables: { rideId: parseInt(a, 10) },
            }),
            i = c.data,
            l = c.loading,
            d = c.subscribeToMore,
            u = Object(w.b)(vr),
            s = Object(F.a)(u, 1)[0];
          Object(r.useEffect)(
            function() {
              a || n.push('/');
            },
            [a, n],
          ),
            Object(r.useEffect)(
              function() {
                i &&
                  d({
                    document: br,
                    updateQuery: function(e, n) {
                      var a = n.subscriptionData;
                      if (a.data) {
                        var t = xe.a.cloneDeep(e);
                        return (
                          (t.GetRide.ride = a.data.RideStatusSubscription), t
                        );
                      }
                      return e;
                    },
                  });
              },
              [i, d],
            ),
            Object(r.useEffect)(
              function() {
                console.log(i),
                  i &&
                    'FINISHED' === i.GetRide.ride.status &&
                    (window.location.href = '/');
              },
              [i, n],
            );
          var f = (function() {
            var e = Object(G.a)(
              T.a.mark(function e(n) {
                var t;
                return T.a.wrap(function(e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (!a) {
                          e.next = 4;
                          break;
                        }
                        return (
                          (t = parseInt(a, 10)),
                          (e.next = 4),
                          s({
                            refetchQueries: [
                              { query: gr, variables: { rideId: t } },
                            ],
                            variables: { rideId: t, status: n },
                          })
                        );
                      case 4:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function(n) {
              return e.apply(this, arguments);
            };
          })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(sr, {
              userData: t && t.GetMyProfile.user,
              rideData: i && i.GetRide.ride,
              updateRide: f,
              loading: l,
            }),
            l && o.a.createElement(ue, null),
          );
        };
      function Or() {
        var e = Object(C.a)([
          '\n    mutation logUserOut {\n        logUserOut @client\n    }\n',
        ]);
        return (
          (Or = function() {
            return e;
          }),
          e
        );
      }
      function Er() {
        var e = Object(C.a)([
          '\n    mutation logUserIn($token: String!) {\n        logUserIn(token: $token) @client\n    }\n',
        ]);
        return (
          (Er = function() {
            return e;
          }),
          e
        );
      }
      var jr = Object(U.a)(Er()),
        xr = Object(U.a)(Or());
      function kr() {
        var e = Object(C.a)([
          '\n  display: block;\n  text-decoration: underline;\n  margin: 20px 0;\n',
        ]);
        return (
          (kr = function() {
            return e;
          }),
          e
        );
      }
      function _r() {
        var e = Object(C.a)([
          '\n  text-decoration: underline;\n  cursor: pointer;\n',
        ]);
        return (
          (_r = function() {
            return e;
          }),
          e
        );
      }
      function yr() {
        var e = Object(C.a)(['\n  display: block;\n  margin-bottom: 5px;\n']);
        return (
          (yr = function() {
            return e;
          }),
          e
        );
      }
      function wr() {
        var e = Object(C.a)(['']);
        return (
          (wr = function() {
            return e;
          }),
          e
        );
      }
      function Sr() {
        var e = Object(C.a)([
          '\n  display: grid;\n  grid-template-columns: 1fr 4fr;\n  grid-gap: 10px;\n  margin-bottom: 10px;\n',
        ]);
        return (
          (Sr = function() {
            return e;
          }),
          e
        );
      }
      function Cr() {
        var e = Object(C.a)([
          '\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n',
        ]);
        return (
          (Cr = function() {
            return e;
          }),
          e
        );
      }
      function Ir() {
        var e = Object(C.a)(['\n  padding: 0 40px;\n']);
        return (
          (Ir = function() {
            return e;
          }),
          e
        );
      }
      var Nr = S.default.div(Ir()),
        Pr = S.default.img(Cr()),
        Mr = Object(S.default)(D.b)(Sr()),
        Ar = S.default.div(wr()),
        Dr = S.default.span(yr()),
        Rr = S.default.span(_r()),
        Lr = Object(S.default)(D.b)(kr()),
        Tr = function(e) {
          var n = e.logUserOut,
            a = e.userData,
            t = e.placesData,
            r = e.userDataLoading,
            c = e.placesDataLoading;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Settings | Nuber'),
            ),
            o.a.createElement(re, { title: 'Account Settings', backTo: '/' }),
            o.a.createElement(
              Nr,
              null,
              o.a.createElement(
                Mr,
                { to: '/edit-account' },
                !r &&
                  a &&
                  a.profilePhoto &&
                  a.email &&
                  a.fullName &&
                  o.a.createElement(
                    o.a.Fragment,
                    null,
                    o.a.createElement(Pr, { src: a.profilePhoto }),
                    o.a.createElement(
                      Ar,
                      null,
                      o.a.createElement(Dr, null, a.fullName),
                      o.a.createElement(Dr, null, a.email),
                    ),
                  ),
              ),
              !c &&
                t &&
                t.map(function(e) {
                  return o.a.createElement(zt, {
                    key: e.id,
                    placeId: e.id,
                    fav: e.isFav,
                    name: e.name,
                    address: e.address,
                  });
                }),
              o.a.createElement(Lr, { to: '/places' }, 'Go to Places'),
              o.a.createElement(Rr, { onClick: n }, 'Log Out'),
            ),
          );
        },
        Gr = function() {
          var e = Object(w.b)(xr),
            n = Object(F.a)(e, 1)[0],
            a = Object(w.c)(z),
            t = a.data,
            r = a.loading,
            c = Object(w.c)(K),
            i = c.data,
            l = c.loading;
          return (
            console.log('updated, ', i),
            o.a.createElement(Tr, {
              userData: t && t.GetMyProfile.user,
              userDataLoading: r,
              placesData: i && i.GetMyPlaces.places,
              placesDataLoading: l,
              logUserOut: n,
            })
          );
        },
        Fr = a(82),
        Ur = a.n(Fr);
      function Br() {
        var e = Object(C.a)([
          '\n  position: absolute;\n  top: 20px;\n  left: 20px;\n',
        ]);
        return (
          (Br = function() {
            return e;
          }),
          e
        );
      }
      function $r() {
        var e = Object(C.a)(['\n  margin-right: 10px;\n']);
        return (
          ($r = function() {
            return e;
          }),
          e
        );
      }
      function zr() {
        var e = Object(C.a)([
          '\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n',
        ]);
        return (
          (zr = function() {
            return e;
          }),
          e
        );
      }
      function Kr() {
        var e = Object(C.a)(['\n  font-size: 25px;\n  margin-bottom: 40px;\n']);
        return (
          (Kr = function() {
            return e;
          }),
          e
        );
      }
      function Vr() {
        var e = Object(C.a)(['\n  margin-top: 30px;\n  padding: 50px 20px;\n']);
        return (
          (Vr = function() {
            return e;
          }),
          e
        );
      }
      var Hr = S.default.div(Vr()),
        qr = S.default.h2(Kr()),
        Wr = S.default.span(zr()),
        Jr = S.default.span($r()),
        Zr = Object(S.default)(X)(Br()),
        Qr = function(e) {
          var n = e.loginCallback;
          return o.a.createElement(
            Hr,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Social Login | Nuber'),
            ),
            o.a.createElement(qr, null, 'Choose an account'),
            o.a.createElement(Zr, { backTo: '/' }),
            o.a.createElement(Ur.a, {
              appId: '1223993451141024',
              fields: 'name,email,picture',
              callback: n,
              render: function(e) {
                return o.a.createElement(
                  Wr,
                  { onClick: e.onClick },
                  o.a.createElement(
                    Jr,
                    null,
                    o.a.createElement(
                      'svg',
                      {
                        xmlns: 'http://www.w3.org/2000/svg',
                        width: '18',
                        height: '18',
                        viewBox: '0 0 24 24',
                        fill: '#344EA1',
                      },
                      o.a.createElement('path', {
                        d:
                          'M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z',
                      }),
                    ),
                  ),
                  'Facebook',
                );
              },
            }),
          );
        };
      function Yr() {
        var e = Object(C.a)([
          '\n    mutation facebookConnect(\n        $firstName: String!\n        $lastName: String!\n        $email: String\n        $fbId: String!\n    ) {\n        FacebookConnect(\n            firstName: $firstName\n            lastName: $lastName\n            email: $email\n            fbId: $fbId\n        ) {\n            ok\n            error\n            token\n        }\n    }\n',
        ]);
        return (
          (Yr = function() {
            return e;
          }),
          e
        );
      }
      var Xr = Object(U.a)(Yr()),
        eo = function(e) {
          var n = e.history,
            a = Object(w.b)(Xr),
            t = Object(F.a)(a, 2),
            r = t[0],
            c = t[1].loading,
            i = Object(w.b)(jr),
            l = Object(F.a)(i, 1)[0],
            d = (function() {
              var e = Object(G.a)(
                T.a.mark(function e(a) {
                  var t, o;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (!a.accessToken) {
                              e.next = 24;
                              break;
                            }
                            return (
                              (e.prev = 1),
                              (e.next = 4),
                              r({
                                variables: {
                                  email: a.email,
                                  fbId: a.userID,
                                  firstName: a.name,
                                  lastName: a.name,
                                },
                              })
                            );
                          case 4:
                            if (
                              ((t = e.sent),
                              (o = t.data),
                              console.log(o),
                              !o || !o.FacebookConnect)
                            ) {
                              e.next = 17;
                              break;
                            }
                            if (!o.FacebookConnect.ok) {
                              e.next = 16;
                              break;
                            }
                            if (!o.FacebookConnect.token) {
                              e.next = 14;
                              break;
                            }
                            return (
                              (e.next = 12),
                              l({
                                variables: { token: o.FacebookConnect.token },
                              })
                            );
                          case 12:
                            b.b.success('Welcome '.concat(a.name)),
                              n.replace('/');
                          case 14:
                            e.next = 17;
                            break;
                          case 16:
                            b.b.error(o.FacebookConnect.error);
                          case 17:
                            e.next = 22;
                            break;
                          case 19:
                            (e.prev = 19),
                              (e.t0 = e.catch(1)),
                              b.b.error(e.t0.message);
                          case 22:
                            e.next = 25;
                            break;
                          case 24:
                            b.b.error('Could not log you in \ud83d\ude1e');
                          case 25:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 19]],
                  );
                }),
              );
              return function(n) {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(Qr, { loginCallback: d }),
            c && o.a.createElement(ue, null),
          );
        };
      function no() {
        var e = Object(C.a)(['\n  margin-bottom: 20px;\n']);
        return (
          (no = function() {
            return e;
          }),
          e
        );
      }
      function ao() {
        var e = Object(C.a)(['\n  padding: 0 40px;\n']);
        return (
          (ao = function() {
            return e;
          }),
          e
        );
      }
      function to() {
        var e = Object(C.a)(['']);
        return (
          (to = function() {
            return e;
          }),
          e
        );
      }
      var ro = S.default.div(to()),
        oo = Object(S.default)(Z)(ao()),
        co = Object(S.default)(ie)(no()),
        io = function(e) {
          var n = e.verificationKey,
            a = e.onChange,
            t = e.onSubmit;
          return o.a.createElement(
            ro,
            null,
            o.a.createElement(
              H.a,
              null,
              o.a.createElement('title', null, 'Verify Phone | Number'),
            ),
            o.a.createElement(re, {
              backTo: '/phone-login',
              title: 'Verify Phone Number',
            }),
            o.a.createElement(
              oo,
              { onSubmit: t },
              o.a.createElement(co, {
                value: n,
                placeholder: 'Enter Verification Code',
                onChange: a,
              }),
              o.a.createElement(J, { type: 'submit' }, 'Submit'),
            ),
          );
        };
      function lo() {
        var e = Object(C.a)([
          '\n  mutation verifyPhone($key: String!, $phoneNumber: String!) {\n    CompletePhoneVerification(key: $key, phoneNumber: $phoneNumber) {\n      ok\n      error\n      token\n    }\n  }\n',
        ]);
        return (
          (lo = function() {
            return e;
          }),
          e
        );
      }
      var uo = Object(U.a)(lo()),
        so = function(e) {
          var n = e.location,
            a = e.history;
          (n.state && n.state.phoneNumber) || a.replace('/');
          var t = Object(r.useState)(''),
            c = Object(F.a)(t, 2),
            i = c[0],
            l = c[1],
            d = Object(w.b)(uo, {
              variables: { key: i, phoneNumber: n.state.phoneNumber },
            }),
            u = Object(F.a)(d, 2),
            s = u[0],
            f = u[1].loading,
            m = Object(w.b)(jr),
            p = Object(F.a)(m, 1)[0],
            g = (function() {
              var e = Object(G.a)(
                T.a.mark(function e(n) {
                  var t, r, o;
                  return T.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), s();
                          case 3:
                            if (
                              ((t = e.sent),
                              !(r = t.data) || !r.CompletePhoneVerification)
                            ) {
                              e.next = 19;
                              break;
                            }
                            if (!(o = r.CompletePhoneVerification).ok) {
                              e.next = 18;
                              break;
                            }
                            if (!o.token) {
                              e.next = 15;
                              break;
                            }
                            return (
                              b.b.success("You're verified, login now"),
                              (e.next = 12),
                              p({ variables: { token: o.token } })
                            );
                          case 12:
                            a.replace('/'), (e.next = 16);
                            break;
                          case 15:
                            console.log(
                              'profile \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uacc4\uc18d \uc9c4\ud589',
                            );
                          case 16:
                            e.next = 19;
                            break;
                          case 18:
                            b.b.error(o.error);
                          case 19:
                            console.log(r), (e.next = 25);
                            break;
                          case 22:
                            (e.prev = 22),
                              (e.t0 = e.catch(0)),
                              b.b.error(e.t0.message);
                          case 25:
                          case 'end':
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 22]],
                  );
                }),
              );
              return function(n) {
                return e.apply(this, arguments);
              };
            })();
          return o.a.createElement(
            'div',
            null,
            o.a.createElement(io, {
              verificationKey: i,
              onChange: function(e) {
                var n = e.target;
                l(n.value);
              },
              onSubmit: g,
            }),
            f && o.a.createElement(ue, null),
          );
        },
        fo = function() {
          return o.a.createElement(
            R.d,
            null,
            o.a.createElement(R.b, { path: '/', exact: !0, component: ut }),
            o.a.createElement(R.b, { path: '/phone-login', component: It }),
            o.a.createElement(R.b, { path: '/verify-phone', component: so }),
            o.a.createElement(R.b, { path: '/social-login', component: eo }),
            o.a.createElement(R.b, { path: '/email-login', component: On }),
            o.a.createElement(R.a, { from: '*', to: '/' }),
          );
        },
        mo = function() {
          return o.a.createElement(
            R.d,
            null,
            o.a.createElement(R.b, { path: '/', exact: !0, component: Fa }),
            o.a.createElement(R.b, { path: '/ride/:rideId?', component: hr }),
            o.a.createElement(R.b, { path: '/chat/:chatId?', component: Fe }),
            o.a.createElement(R.b, { path: '/edit-account', component: rn }),
            o.a.createElement(R.b, { path: '/settings', component: Gr }),
            o.a.createElement(R.b, { path: '/places', component: Zt }),
            o.a.createElement(R.b, { path: '/add-place', component: Ee }),
            o.a.createElement(R.b, { path: '/find-address', component: Dn }),
            o.a.createElement(R.a, { from: '*', to: '/' }),
          );
        },
        po = function(e) {
          var n = e.isLoggedIn;
          return o.a.createElement(
            D.a,
            null,
            n ? o.a.createElement(mo, null) : o.a.createElement(fo, null),
          );
        };
      function go() {
        var e = Object(C.a)([
          '\n    {\n        auth {\n            isLoggedIn @client\n        }\n    }\n',
        ]);
        return (
          (go = function() {
            return e;
          }),
          e
        );
      }
      var bo = Object(U.a)(go()),
        vo = function() {
          var e = Object(w.c)(bo).data;
          return o.a.createElement(
            o.a.Fragment,
            null,
            o.a.createElement(M, null),
            o.a.createElement(
              S.ThemeProvider,
              { theme: A },
              o.a.createElement(po, { isLoggedIn: e.auth.isLoggedIn }),
            ),
            o.a.createElement(b.a, {
              draggable: !0,
              position: 'bottom-center',
            }),
          );
        };
      i.a.render(
        o.a.createElement(t.a, { client: y }, o.a.createElement(vo, null)),
        document.getElementById('root'),
      );
    },
    81: function(e, n, a) {
      e.exports = a.p + 'static/media/bg.f1662d11.png';
    },
    86: function(e, n, a) {
      e.exports = a(146);
    },
  },
  [[86, 1, 2]],
]);
//# sourceMappingURL=main.abaa3546.chunk.js.map
