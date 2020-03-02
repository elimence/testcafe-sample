import { Selector } from 'testcafe';

// const origin = 'https://www.paysail.co';
const origin = 'https://yamaha-dealers.com/ymus/loginForm?out';


fixture(`govdocs regression tests - ${origin}`)
  .page(origin)
  .before(async ctx => {
    console.log('Before Hook');
  })
;

test('test_1', async (t) => {
  await t
    .wait(5000)
    .expect(Selector('button').exists).ok()
  ;
});
