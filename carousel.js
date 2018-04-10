const WIDTH = 300
let n = 0
const SIZE = 4
$(".buttons > span").each((index,btn) => {
    $(btn).click(() => {
        let offset = -index * WIDTH
        $(".images").css({
            transform: `translate(${offset}px)`
        })
        $(btn).addClass("red").siblings(".red").removeClass("red")
    })
})
$(".buttons > span").eq(0).trigger("click")
function setTimer() {
    return setInterval(()=> {
        n++
        $(".buttons > span").eq(n % SIZE).trigger("click")

    },2000)
}
let timerId = setTimer()
$(".window").mouseenter(() => {
    clearInterval(timerId)
})

$(".window").mouseleave(() => {
    timerId = setTimer()
})

