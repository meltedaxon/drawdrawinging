# React official tutorial 따라하기

출처 : (https://ko.reactjs.org/tutorial/tutorial.html)[https://ko.reactjs.org/tutorial/tutorial.html]


## React 팀의 추천 툴체인

- 새로운 싱글 페이지 앱 : Create React App
- 서버 렌더링 Node.js 웹사이트 : Next.js
- 고정적인 콘텐츠 지향적 웹사이트 : Gatsby
- 컴포넌트 라이브러리 혹은 이미 있는 코드베이스에 통합 : Neutrino, Nx, Parcel, Razzle 등


현재 튜토리얼에서는 create react app 사용
create react app으로 백 엔드 로직, 데이터베이스 제어 불가

### `npx create-react-app my-app`의 자동생성 readme

```markdown
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

```

## React란

선언적이고 효율적이며 유연한 **JavaScript 라이브러리**


개별 **component**는
**props**라는 매개변수를 받아오고
**render** 함수를 통해 표시할 뷰 계층 구조 반환
```javascript
class ShoppingList extends React.Component{
    render(){
        return(
            <div className = "shopping-list">
            <h1>Shopping List for {this.props.nane}</h1>
            <ul>
                <li>Instagram</li>
                <li>WhatsApp</li>
                <li>Oculus</li>
            </ul>
            </div>
        );
    }
}
```

- render 함수
render는 렌더링 할 내용을 경량화한 React 엘리먼트 반환

- JSX
javascript 확장한 문법. react와 함께 사용 권장
```javascript
React.createElement("div", {
        className: "shopping-list"
    }, 
    React.createElement("h1", null, "Shopping List for ", props.name), 
    React.createElement("ul", null,
        React.createElement("li", null, "Instagram"),
        React.createElement("li", null, "WhatsApp"),
        React.createElement("li", null, "Oculus")
    )
);
```
