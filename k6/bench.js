// call me with k6 run bench.js
import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 2000 },
    { duration: '1m30s', target: 20000 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://demo.cluster.domain.com/?wait=2s'); // Change me  // /data?size=10&unit=KB
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
