# FIX MY DATA

무료 CSV/TSV 구조 오류 검사 웹사이트입니다.

## 기능
- CSV/TSV/TXT 파일을 브라우저 내에서 검사 (최대 5MB)
- 예상 열 개수와 실제 열 개수 불일치 진단
- 닫히지 않은 따옴표 및 인코딩 손상 징후 확인
- UTF-8/CP949 계열 문자 해석 시도
- UTF-8 BOM 포함 CSV로 다운로드 (값 검토 권장)

## 공개 주소
https://fixmydata.kaistbnt.workers.dev/

Cloudflare Workers를 통한 무료 공개. GitHub Pages는 소스 테스트/백업용으로만 사용하며, 상업용 광고 서비스의 최종 호스팅 대상이 아닙니다.

## 테스트
로컬에서 Node.js가 있다면 `node tests.js`를 실행해 기본 파서 회귀 테스트를 수행할 수 있습니다.

## 정책과 수익화
현재 광고 없음, 광고 수익 0원. AdSense 가입·사이트 검토·정산 인증은 별도 절차가 필요합니다. 사용자 파일 내용은 브라우저에서만 처리합니다. 외부 분석 서버는 없습니다. 파일 인코딩 감지는 휴리스틱이며 손상된 원본의 완전 복구를 보장하지 않습니다.

## 운영 비용
웹 정적 파일만 사용하므로 GitHub Pages 공개 저장소를 이용하면 별도의 서버를 유지할 필요가 없습니다. 이용약관과 무료 한도 변경 시 점검이 필요합니다.

## 현재 Cloudflare 배포 주소
https://fixmydata.kaistbnt.workers.dev/

검색엔진용 canonical, robots.txt, sitemap.xml은 이 주소를 가리킵니다. 실제 Worker의 GitHub 자동 배포 연결과 HTTP 응답 헤더는 Cloudflare 대시보드에서 확인해야 합니다.

## 광고 정책상 주의
workers.dev는 공개 접미사 목록에 있지만 현재 주소는 fixmydata.kaistbnt.workers.dev로 한 단계 더 하위 도메인입니다. AdSense 사이트 등록 허용 여부는 계정의 사이트 추가 화면에서 확인해야 합니다. 불가 시 자체 도메인 구매 또는 별도의 적격 호스트가 필요할 수 있습니다. 현재 광고 스크립트나 추적 코드는 포함하지 않습니다.
