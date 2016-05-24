var CommentBox = React.createClass({displayName:'CommentBox',
  render: function() {
    return (
      React.createElement('div', {className: "commentBox"},
        "Hello, world! I am a CommentBox."
      )1
    )
  }
});
ReactDOM.render( // 最終的にHTMLにレンダリングされるReactコンポーネントのツリーを返す
  React.createElement(CommentBox, null), // Reactのdivコンポーネントがインスタンス化されたもの
  document.getElementById('content') // 生DOMの要素に注入
);
