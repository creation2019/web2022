$(function () {
    $('.pigeon').slideDown(2000)
    $('.stais1').slideDown(2000)
    //开始
    let audi1 = $('#au1')
    //楼梯
    let audi2 = $('#au2')
    //结束
    let audi3 = $('#au3')
    //鸽子
    let audi4 = $('#au4')
    var gu1 = null
    var gu2 = null
    var gu3 = null
    var gu4 = null
    var s1=null
    var s2=null
    audi1[0].autoplay = true
    audi1[0].load()
    $('.beiji').fadeTo(2000, 1, function () {
        $('.hua').fadeTo("slow", 1, function () {
            $('.wer').on('touchmove', function () {
                //结束音乐 
                $('.wer').off()
                audi1[0].autoplay = false
                audi1[0].load()
                //隐藏文字
                $('.hua').hide()
                $('.once').show()
                //楼梯出现
                $('.two').show()
                setTimeout(function () {
                    audi2[0].autoplay = true
                    audi2[0].load()
                }, 3500)
                //光圈1
                gu1 = setTimeout(() => {
                    $('.guanqu1').show()
                    $('.guanqu1>.gu').show()
                    $('.n1').hide()
                    $('.n2').show()
                }, 7500)
            })

        });




    })
    $('.guanqu1').on('click', function () {
        //光圈隐藏
        clearTimeout(gu1)
        $('.guanqu1').hide()
        $('.guanqu1>.gu').hide()
        var gzz = 0
        var bus = 0
        $('.pigeon>img').attr({
            src: './img/gz/gz1.png'
        })
        audi4[0].autoplay = true
        audi4[0].load()
        //鸽子移动
        $('.pigeon').addClass('pe1');
        var ss = setInterval(function () {
            gzz++;
            bus++
            $('.pigeon>img').attr({
                src: './img/gz/gz' + gzz + '.png'
            })
            if (gzz == 5) {
                gzz = 0
            }
            if (bus == 13) {
                clearInterval(ss)
                audi4[0].autoplay = true
                audi4[0].load()
                $('.pigeon').removeClass('pe1')
                $('.pigeon').addClass('pe2');
                gzz = 11
                bus = 0
                var ss2 = setInterval(function () {
                    gzz++
                    bus++
                    $('.pigeon>img').attr({
                        src: './img/gz/gz' + gzz + '.png'
                    })

                    if (gzz == 15) {
                        gzz = 11
                    }
                    if (bus == 12) {
                        audi4[0].autoplay = true
                        audi4[0].load()
                        clearInterval(ss2)
                        setTimeout(function () {
                            $('.pigeon').removeClass('pe2')
                            $('.pigeon').addClass('pe3');
                        }, 200)

                        gzz = 1
                        bus = 0
                        var san3 = setInterval(function () {
                            gzz++
                            bus++
                            if (gzz == 5) {
                                gzz = 1
                            }
                            $('.pigeon>img').attr({
                                src: './img/gz/gz' + gzz + '.png'
                            })
                            if (bus == 15) {
                                audi4[0].autoplay = true
                                audi4[0].load()
                                clearInterval(san3)
                                setTimeout(function () {
                                    $('.pigeon').removeClass('pe3')
                                    $('.pigeon').addClass('pe4');
                                }, 200)
                                bus = 0
                                gzz = 11
                                var san4 = setInterval(function () {
                                    gzz++
                                    bus++
                                    if (gzz == 15) {
                                        gzz = 11
                                    }
                                    $('.pigeon>img').attr({
                                        src: './img/gz/gz' + gzz + '.png'
                                    })
                                    if (bus == 10) {
                                        clearInterval(san4)
                                        audi4[0].autoplay = false
                                        audi4[0].load()
                                        $('.tir').show()
                                        $('.n3').show()
                                        $('.n2').hide()

                                        setTimeout(function () {
                                            audi2[0].autoplay = true
                                            audi2[0].load()
                                        }, 1500)
                                        gu2 = setTimeout(function () {
                                            $('.guanqu2').show()
                                            $('.guanqu2>div').show()
                                        }, 6000)
                                    }
                                }, 200)

                            }
                        }, 200)

                    }
                }, 200)

            }
        }, 200)

    })
    $('.guanqu2').on('click', function () {
        clearTimeout(gu2)
        $('.guanqu2').hide()
        $('.guanqu2>.gu').hide()
        gzz = 0
        bus = 0
        $('.pigeon>img').attr({
            src: './img/gz/gz1.png'
        })
        setTimeout(function () {
            $('.pigeon').removeClass('pe4')
            $('.pigeon').addClass('pee1');
        }, 200)
        audi4[0].autoplay = true
        audi4[0].load()
        var f1 = setInterval(function () {
            gzz += 1
            bus += 1
            $('.pigeon>img').attr({
                src: './img/gz/gz' + gzz + '.png'
            })
            if (gzz == 5) {
                gzz = 1
            }
            if (bus == 5) {

                clearInterval(f1)

                setTimeout(function () {
                    $('.pigeon').removeClass('pee1')
                    $('.pigeon').addClass('pee2');
                }, 200)
                gzz = 10
                bus = 0
                audi4[0].autoplay = true
                audi4[0].loop = true
                audi4[0].load()
                var f2 = setInterval(function () {
                    gzz += 1
                    bus += 1
                    $('.pigeon>img').attr({
                        src: './img/gz/gz' + gzz + '.png'
                    })
                    if (gzz == 15) {
                        gzz = 11
                    }

                    if (bus == 25) {
                        clearInterval(f2)
                        audi4[0].autoplay = false
                        audi4[0].load()
                        s2=setTimeout(function () {
                            audi2[0].autoplay = true
                            audi2[0].load()
                        }, 2000)

                        $('.four').show()
                        $('.n4').show()
                        $('.n3').hide()

                        var gu3 = setTimeout(function () {
                            $('.guanqu3').show();
                            $('.guanqu3>div').show()
                        }, 6500)
                         //点击回到之前
                         $('.stais8').on('click', function () {
                            $('.pigeon').removeClass('pee2')
                            $('.pigeon').css({
                                // background: 'url(./img/gz/gz11.png) no-repeat 0 0/100%',
                                bottom: '4.05rem',
                                left: '1.53rem',
                            })
                            $('.pigeon>img').attr({
                                src: './img/gz/gz11.png'
                            })
                            $('.n4').hide()
                            $('.n3').show()
                            $('.n5').hide()
                        })
                    }
                }, 200)
            }
        }, 200)

    })
    $('.guanqu3').on('click', function () {
        $('.stais8').off()
        clearTimeout(s2)
        clearTimeout(gu3)
        $('.guanqu3').hide()
        $('.guanqu3>.gu').hide()
        gzz = 20
        bus = 0
        $('.pigeon>img').attr({
            src: './img/gz/gz21.png'
        })
        audi4[0].autoplay = true
        audi4[0].load()
        $('.pigeon').removeClass('pee2')
        $('.pigeon').addClass('gp1');

        var kk1 = setInterval(function () {
            bus += 1
            gzz += 1;
            $('.pigeon>img').attr({
                src: './img/gz/gz' + gzz + '.png'
            })
            if (gzz == 25) {
                gzz = 21
            }
            if (bus == 10) {
                clearInterval(kk1)
                audi4[0].autoplay = true
                audi4[0].load()
                $('.pigeon').removeClass('gp1')
                $('.pigeon').addClass('gp2');


                gzz = 30;
                bus = 0;
                var kk2 = setInterval(function () {
                    bus += 1
                    gzz += 1;
                    $('.pigeon>img').attr({
                        src: './img/gz/gz' + gzz + '.png'
                    })
                    if (gzz == 35) {
                        gzz = 31
                    }
                    if (bus == 10) {
                        audi4[0].autoplay = true
                        audi4[0].load()
                        clearInterval(kk2)
                        setTimeout(function () {
                            $('.pigeon').removeClass('gp2')
                            $('.pigeon').addClass('gp3');
                        })
                        gzz = 20;
                        bus = 0;
                        var kk3 = setInterval(function () {
                            bus += 1
                            gzz += 1;
                            $('.pigeon>img').attr({
                                src: './img/gz/gz' + gzz + '.png'
                            })
                            if (gzz == 25) {
                                gzz = 21
                            }
                            if (bus == 10) {
                                clearInterval(kk3)
                                audi4[0].autoplay = false
                                audi4[0].load()
                                $('.five').show()
                               s1=setTimeout(function () {
                                    audi2[0].autoplay = true
                                    audi2[0].load()
                                }, 2000)

                                gu4 = setTimeout(function () {
                                    $('.guanqu4').show()
                                    $('.guanqu4>div').show()
                                }, 6000)
                                $('.n5').show()
                                $('.n4').hide()
                                $('.n3').hide()
                                $('.stais8').on('click', function () {
                                    $('.pigeon').removeClass('gp3')
                                    $('.pigeon').css({
                                        // background: 'url(./img/gz/gz11.png) no-repeat 0 0/100%',
                                        bottom: '4.05rem',
                                        left: '1.53rem',
                                    })
                                    $('.pigeon>img').attr({
                                        src: './img/gz/gz11.png'
                                    })
                                    $('.n4').hide()
                                    $('.n3').show()
                                    $('.n5').hide()
                                })

                                $('.stais14').on('click', function () {
                                    $('.pigeon').removeClass('gp4')
                                    
                                    
                                    $('.pigeon').css({
                                        // background: 'url(./img/gz/gz12.png) no-repeat 0 0/100%',
                                        bottom: '6.04rem',
                                        left: '3.93rem',
                                    })
                                    $('.pigeon>img').attr({
                                        src: './img/gz/gz12.png'
                                    })
                                    $('.n3').hide()
                                    $('.n4').show()
                                    $('.n5').hide()
                                })

                            }
                        }, 200)
                    }
                }, 200)

            }
        }, 200)

    })
    $('.guanqu4').on('click', function () {
        $('.stais8').off()
        clearTimeout(s1)
        $('.stais14').off()
        clearTimeout(gu4)
        $('.guanqu4').hide()
        $('.guanqu4>.gu').hide()
        $('.pigeon>img').attr({
            src: './img/gz/gz31.png'
        })
        gzz = 31;
        bus = 0;
        audi4[0].autoplay = true
        audi4[0].load()
        $('.pigeon').removeClass('gp3')
        $('.pigeon').addClass('gp4');
        var yy1 = setInterval(function () {
            gzz += 1
            bus += 1
            $('.pigeon>img').attr({
                src: './img/gz/gz' + gzz + '.png'
            })
            if (gzz == 35) gzz = 31;
            if (bus == 10) {
                audi4[0].autoplay = true
                audi4[0].load()
                clearInterval(yy1)
                setTimeout(function () {
                    $('.pigeon').removeClass('gp4')
                    $('.pigeon').addClass('gp5');
                })
                gzz = 1
                bus = 0
                var yy2 = setInterval(function () {
                    gzz += 1
                    bus += 1
                    $('.pigeon>img').attr({
                        src: './img/gz/gz' + gzz + '.png'
                    })
                    if (gzz == 5) gzz = 1;
                    if (bus == 10) {
                        audi4[0].autoplay = false
                        audi4[0].load()
                        clearInterval(yy2)
                        $('.beiji').hide()
                        $('.pigeon').hide()
                        $('.stais24').removeClass('five4')
                        $('.gi').show()
                        var a = 100
                        var au3 = $('#au3')
                        au3[0].autoplay = true
                        au3[0].load()
                        $('.concent').addClass('con');
                        $('.stais24').addClass('sta')

                        var sheng = setInterval(function () {

                            a -= 5

                            $('.wer').css({
                                backgroundPositionY: a + '%'
                            })

                            if (a == 0) {
                                clearInterval(sheng)
                                $('.shew').show()
                            }
                        }, 120)

                    }
                }, 200)

            }
        }, 200)

    })
  
    $('.zh_ch').on('click',function(){
        history.go(0);
    })





















})