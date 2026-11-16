import { createElementBlock as e, createElementVNode as t, openBlock as n, renderSlot as r, toDisplayString as i } from "vue";
// \0plugin-vue:export-helper
var a = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, o = { class: "boto-custom" }, s = /*#__PURE__*/ a({
	__name: "MyButton",
	props: ["text"],
	setup(t) {
		return (r, a) => (n(), e("button", o, i(t.text), 1));
	}
}, [["__scopeId", "data-v-78b660ef"]]), c = ["src"], l = {
	__name: "MyImage",
	props: { src: String },
	setup(t) {
		return (r, i) => (n(), e("img", { src: t.src }, null, 8, c));
	}
}, u = { class: "my-card" }, d = /*#__PURE__*/ a({
	__name: "MyCard",
	props: { title: String },
	setup(a) {
		return (o, s) => (n(), e("div", u, [t("h3", null, i(a.title), 1), t("p", null, [r(o.$slots, "default", {}, void 0, !0)])]));
	}
}, [["__scopeId", "data-v-981dab49"]]), f = { install(e) {
	e.component("MyButton", s), e.component("MyImage", l), e.component("MyCard", d);
} };
export { s as MyButton, d as MyCard, l as MyImage, f as default };
