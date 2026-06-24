// .shiny-flow/auth.js
// 이 파일을 수정해서 프로젝트의 인증(로그인) 로직을 작성하세요.
// npx shiny-flow . 실행 시 자동으로 불러옵니다.

/**
 * 스크린샷 캡처 전 한 번 호출됩니다.
 * 여기서 로그인을 처리하면 이후 모든 페이지 방문이 인증된 상태로 진행됩니다.
 *
 * @param {import('playwright').Page} page - Playwright 페이지 객체
 * @param {string} baseUrl - 개발 서버 기본 URL (예: 'http://localhost:3000')
 */
module.exports = async function authenticate(page, baseUrl) {
  // 로그인 페이지로 이동합니다
  await page.goto(baseUrl + '/login');

  // 아이디 또는 이메일 입력
  // '#email'을 실제 아이디 입력 필드의 CSS 셀렉터로 바꾸세요
  await page.fill('#email', 'user@nextmail.com');

  // 비밀번호 입력
  // '#password'를 실제 비밀번호 입력 필드의 CSS 셀렉터로 바꾸세요
  await page.fill('#password', '123456');

  // 로그인 버튼 클릭
  // 'button[type=submit]'을 실제 로그인 버튼의 CSS 셀렉터로 바꾸세요
  await page.click('button[type=submit]');

  // 로그인 후 이동할 페이지를 기다립니다
  // '**/dashboard'를 로그인 성공 후 표시되는 페이지의 URL 패턴으로 바꾸세요
  await page.waitForURL('**/dashboard');
};
