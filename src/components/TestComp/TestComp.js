import classes from './TestComp.module.css';

import Card from '../UI/Card/Card';

const TestComp = () => {
  return (
    <div className={classes.testComp}>
      <h1>Test Diary</h1>
      <h3>2023 / 03 / 17</h3>
      <Card>
        <div>
          <h2>☑︎ Github Page 연동</h2>
          <p> version : 0.1.0</p>
          <p>
            참고 :
            https://medium.com/hcleedev/web-react-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-github-pages%EB%A1%9C-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0-f62e59a2e210
          </p>
        </div>
      </Card>
    </div>
  );
};

export default TestComp;
