import test from 'ava';
import {parse, stringify} from '@aureooms/js-integer-big-endian';
import {Montgomery} from '../../../../../src';
const REPRESENTATION_BASE = 94906265;
const DISPLAY_BASE = 10;
const fmt = x => x.length <= 40 ? x : x.slice(0,19) + '..' + x.slice(-19);
function macro(t, N, A) {{
    const n = parse(DISPLAY_BASE, REPRESENTATION_BASE, N);
    const mont = new Montgomery(REPRESENTATION_BASE, n);

    const a = parse(DISPLAY_BASE, REPRESENTATION_BASE, A);

    const _a = mont.from(a);

    const a_ = mont.out(_a);

    const A_ = stringify(REPRESENTATION_BASE, DISPLAY_BASE, a_, 0, a_.length);

    t.is(A, A_);
}}

macro.title = ( _ , N , A ) => `conversion ${fmt(A)} mod ${fmt(N)}` ;

test(macro, '2', '1');
test(macro, '2', '0');
test(macro, '3', '1');
test(macro, '3', '2');
test(macro, '3', '0');
test(`F_5 base ${REPRESENTATION_BASE} throws`, (t) => {
    t.throws(() => new Montgomery(REPRESENTATION_BASE, [5]), {message: /GCD/});
});
test(macro, '19', '1');
test(macro, '19', '18');
test(macro, '19', '3');
test(macro, '19', '16');
test(macro, '19', '7');
test(macro, '19', '12');
test(macro, '19', '9');
test(macro, '19', '10');
test(macro, '19', '11');
test(macro, '19', '8');
test(macro, '19', '17');
test(macro, '19', '2');
test(macro, '19', '5');
test(macro, '19', '14');
test(macro, '19', '13');
test(macro, '19', '6');
test(macro, '19', '4');
test(macro, '19', '15');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '1');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819948');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '3');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819946');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '7');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819942');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '9');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819940');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '11');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819938');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '17');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819932');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '22');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819927');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '24');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819925');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '27');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819922');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '29');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564819920');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '1234');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564818715');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '5678');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956564814271');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '94906265');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956469913684');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '94906266');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003956469913683');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '1073741824');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728792003955491078125');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '51676101935731');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820282019728791952280462884218');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '717897987691852588770249');
test(macro, '57896044618658097711785492504343953926634992332820282019728792003956564819949', '57896044618658097711785492504343953926634992332820281301830804312103976049700');
