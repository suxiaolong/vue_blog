(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{559:function(v,_,t){"use strict";t.r(_);var e=t(15),s=Object(e.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"git分支开发工作流"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git分支开发工作流"}},[v._v("#")]),v._v(" Git分支开发工作流")]),v._v(" "),t("p",[v._v("文档："),t("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E5%BC%80%E5%8F%91%E5%B7%A5%E4%BD%9C%E6%B5%81",target:"_blank",rel:"noopener noreferrer"}},[v._v("Git分支开发工作流"),t("OutboundLink")],1)]),v._v(" "),t("h3",{attrs:{id:"长期分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#长期分支"}},[v._v("#")]),v._v(" 长期分支")]),v._v(" "),t("p",[v._v("因为 Git 使用简单的三方合并，所以就算在一段较长的时间内，反复把一个分支合并入另一个分支，也不是什么难事。 也就是说，在整个项目开发周期的不同阶段，你可以同时拥有多个开放的分支；你可以定期地把某些主题分支合并入其他分支中。")]),v._v(" "),t("p",[v._v("许多使用 Git 的开发者都喜欢使用这种方式来工作，比如"),t("strong",[v._v("只在 "),t("code",[v._v("master")]),v._v(" 分支上保留完全稳定的代码")]),v._v("，开发过程在"),t("code",[v._v("dev")]),v._v("分支，开发完成后并入"),t("code",[v._v("test")]),v._v("分支进行测试，通过测试的稳定代码才并入"),t("code",[v._v("master")]),v._v("分支中。")]),v._v(" "),t("p",[t("code",[v._v("dev")]),v._v("和"),t("code",[v._v("test")]),v._v("分支不需要保持绝对稳定，但在"),t("code",[v._v("test")]),v._v("通过测试达到稳定状态，就可以被合并入"),t("code",[v._v("master")]),v._v("分支。")]),v._v(" "),t("p",[v._v("事实上我们刚才讨论的，是随着你的提交而不断右移的指针。 稳定分支("),t("code",[v._v("master")]),v._v(")的指针总是在提交历史中落后一大截，而前沿分支("),t("code",[v._v("dev")]),v._v("或"),t("code",[v._v("test")]),v._v(")的指针往往比较靠前。")]),v._v(" "),t("p",[v._v("你可以用这种方法维护不同层次的稳定性。 一些大型项目还有一个 "),t("code",[v._v("proposed")]),v._v("（建议） 或 "),t("code",[v._v("pu: proposed updates")]),v._v("（建议更新）分支，它可能因包含一些不成熟的内容而不能进入"),t("code",[v._v("master")]),v._v(" 分支。 这么做的目的是使你的分支具有不同级别的稳定性；当它们具有一定程度的稳定性后，再把它们合并入具有更高级别稳定性的分支中。 再次强调一下，使用多个长期分支的方法并非必要，但是这么做通常很有帮助，尤其是当你在一个非常庞大或者复杂的项目中工作时。")]),v._v(" "),t("h3",{attrs:{id:"主题分支-短期分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#主题分支-短期分支"}},[v._v("#")]),v._v(" 主题分支 (短期分支)")]),v._v(" "),t("p",[t("strong",[v._v("主题分支对任何规模的项目都适用")]),v._v("。 主题分支是一种"),t("strong",[v._v("短期分支")]),v._v("，它被"),t("strong",[v._v("用来实现单一特性或其相关工作")]),v._v("。")]),v._v(" "),t("p",[v._v("你已经在上一节中你创建的 "),t("code",[v._v("iss53")]),v._v(" 和 "),t("code",[v._v("hotfix")]),v._v(" 主题分支中看到过这种用法。 你在上一节用到的主题分支（"),t("code",[v._v("iss53")]),v._v(" 和 "),t("code",[v._v("hotfix")]),v._v(" 分支）中提交了一些更新，并且在它们合并入主干分支之后，你又删除了它们。 这项技术能使你快速并且完整地进行上下文切换（context-switch）——因为你的工作被分散到不同的流水线中，在不同的流水线中"),t("strong",[v._v("每个分支都仅与其目标特性相关")]),v._v("，因此，"),t("strong",[v._v("在做代码审查之类的工作的时候就能更加容易地看出你做了哪些改动")]),v._v("。 你可以把做出的改动在主题分支中保留几分钟、几天甚至几个月，等它们成熟之后再合并，而不用在乎它们建立的顺序或工作进度。")]),v._v(" "),t("p",[v._v("考虑这样一个例子，你在 "),t("code",[v._v("master")]),v._v(" 分支上工作到 "),t("code",[v._v("C1")]),v._v("，这时为了解决一个问题而新建 "),t("code",[v._v("iss91")]),v._v(" 分支，在 "),t("code",[v._v("iss91")]),v._v(" 分支上工作到 "),t("code",[v._v("C4")]),v._v("，然而对于那个问题你又有了新的想法，于是你再新建一个 "),t("code",[v._v("iss91v2")]),v._v(" 分支试图用另一种方法解决那个问题，接着你回到 "),t("code",[v._v("master")]),v._v(" 分支工作了一会儿，你又冒出了一个不太确定的想法，你便在 "),t("code",[v._v("C10")]),v._v(" 的时候新建一个 "),t("code",[v._v("dumbidea")]),v._v(" 分支，并在上面做些实验。 你的提交历史看起来像下面这个样子：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/topic-branches-1.png",alt:"拥有多个主题分支的提交历史。"}})]),v._v(" "),t("p",{attrs:{align:"center"}},[v._v("图1. 拥有多个主题分支的提交历史 ▲")]),v._v(" "),t("p",[v._v("现在，我们假设两件事情：你决定使用第二个方案来解决那个问题，即使用在 "),t("code",[v._v("iss91v2")]),v._v(" 分支中方案。 另外，你将 "),t("code",[v._v("dumbidea")]),v._v(" 分支拿给你的同事看过之后，结果发现这是个惊人之举。 这时你可以"),t("strong",[v._v("抛弃 "),t("code",[v._v("iss91")]),v._v(" 分支（即丢弃 "),t("code",[v._v("C5")]),v._v(" 和 "),t("code",[v._v("C6")]),v._v(" 提交）")]),v._v("，然后把另外两个分支合并入主干分支。 最终你的提交历史看起来像下面这个样子：")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://git-scm.com/book/en/v2/images/topic-branches-2.png",alt:"合并了  和  分支之后的提交历史。"}})]),v._v(" "),t("p",{attrs:{align:"center"}},[v._v("图2. 合并了 dumbidea 和 iss91v2 分支之后的提交历史 ▲")]),v._v(" "),t("p",[v._v("我们将会在 "),t("a",{attrs:{href:"https://git-scm.com/book/zh/v2/ch00/ch05-distributed-git",target:"_blank",rel:"noopener noreferrer"}},[v._v("分布式 Git"),t("OutboundLink")],1),v._v(" 中向你揭示更多有关分支工作流的细节， 因此，请确保你阅读完那个章节之后，再来决定你的下个项目要使用什么样的分支策略（branching scheme）。")]),v._v(" "),t("p",[v._v("请牢记，当你做这么多操作的时候，这些分支全部都存于本地。 当你新建和合并分支的时候，所有这一切都只发生在你本地的 Git 版本库中 —— 没有与服务器发生交互。")])])}),[],!1,null,null,null);_.default=s.exports}}]);