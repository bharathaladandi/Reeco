import {
    APPROVED,
    MISSING,
    MISSING_URGENT
  } from "./Product.types";
  

const initialState = {
    products: [
        { id: 1, name: 'Apple', brand: 'Fruit', price: 10, quantity: 1, status: '', selected: false, image: 'https://lh3.googleusercontent.com/fife/AK0iWDwDeRBzJIEKs1Ee7LchnGRTPHeh3wfVP3GvNb0l6BLHyPmrOgwuGw0BxvzDVrolFD6-GyfpKObHAo0mt7kBu3ouXVN8MD6HBGiG2r-c1ID1WQ0wFHU4RhDNUuL3vbMAIgaKicJBpzxkPk4pbU_m1HDw4U7Ylmpm0MKHk-qUZz6OFHb6Oyh_r4n86WjuOXBjOUDwWGSTMpehZCxxAwQYDjj43txWgurPbFhneIWP8E7UlwogBTth-pg-NYw-atGw3nURb_p-ZpTUR2SLz_3N1LIR8rTR2pMaVAw3Vt3KPo94BgVvQaXoPsqEtXgYWbImoiYKp3KY7jVbM38Wx_vxWgnHC35jZ3q3U6vsNay0KIRRrBqDwJ7UBu6e-0Wa8viy8sxGv_dIR23Z9ZorZiLEHb5TFQKU825TWpoftzvPEBJAXxoHOfe0dZ3L7-DbKJaCHQyEYiYUifRRVUR3nE5J9jECqnfGf-GeQt-Tqil4phl6KV-3CM8fqCsYVRtrx7MpCxp-zQFxRIKIk5YmNo8PLgr75N6jyuNBSo9nfkXfyGEEJegrT7yrnGq3CyvkTIW-lgyu0KyeIvm6mFWbm-h1XHBxz48Ng9aga9j-nfN6mRrcFQX_aKs7jVW7sdU62_fOVH0pJ9OZ4Yo559bBkXG8RkiYFx7RtMLS4ULwVejrR6QPhwQ4G2jb0UhaYV1IPUMMntIlqzp0iE1vuJSm2db37RL1SS4wd1n6n_sC58qIEt9I8pjfQ6St4BNV5asDRfHkzeF6LGrsitKdZUDKAdBhcQfNgCvXDu3Xez_RCsjFX3n1jU56brsB6gJ5N4aY59NBwPNVqomN9xouc27g8VfV29YRvioGXOyWWavk4SLJQm1UoNQr2ncFcuIi8QhPNbwHPPAOxSmmJeKlKySqN-QpfNfQe0jfKrhsdKcAqfyxYpbUdT6e84NBM2rLOE5JkaV2pctwauXyj5YVf_5sbXU7E1TZUWs9nYMhIIPKnTgtwZEjwq3q59PnQpOCaIoTXJRqjAcod29v7i_FYwqdE0nkpRSOAo3rO17mFV2UUw0bXRVmI7J3LO83on2GLB0kJNQrOrmGSTzRPDmBlrU_CbvGB3-EFgTMPJ1S4KL3I9DmGIHdJl-lMBW759iN2wLUYVgco6qARcjpwdZYwJRRi1zfgPBc2X6QwJWo1B-BMWXoMY_IDxCscV5Sty1szFPHyaMou8Pbg-1qas8FJhABOkghl_2fovSQir4n9yIrv48TGs-Bk0hKCl6YHG6yKsDWXQB5Cpp5U7W25WwsZl5n_YQZkQAVdHOkcKHxR79-3ik-4hVDKL3MN2QxBWRZM3Zaq1w6Hrx761EjoEaP4b0zRmbRqbA5Fadhwv3G8h8k11d1gUHqqYdkxiTBSPOaDMP9WeSd5ahdgOiwOVRqdru0rwH3ljEkOnwQiPdPkxkHftjKraZJl082ZTXIzBU80eAs2MXLucfXjkqWUG2pUyGFQOIJMBApcxkeVtzmRPRrn0A6Gx4v1Osa8gXtCwdExb5XadBAWag5yTqCnkI18BZWdeJSl8ZWDqAx=s320-w320-h200-p-k' },
        { id: 2, name: 'Onion', brand: 'Vegitable', price: 20, quantity: 1, status: '', selected: false, image: 'data:image/jpeg;base64,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' },
        { id: 3, name: 'Mango', brand: 'Fruit', price: 30, quantity: 1, status: '', selected: false, image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhUQEBIQDxAPEBAQDw8PDw8PDw8QFRIWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0dHx8rKystLy0tLS0tLS0tLS0uLS0tLS0tLS0rLS0tLSstLSstLS0tLS0tLS0tLS0tLS03Lf/AABEIAPQAzwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADsQAAIBAgQDBAgEBQQDAAAAAAABAgMRBAUhMRJBUQYTYXEHIjJCgZGxwVJiodEUI5Ki4WNygrIkM0P/xAAaAQABBQEAAAAAAAAAAAAAAAAAAQIDBAUG/8QALREAAgEEAgEDAgQHAAAAAAAAAAECAwQREiExBRNBUTJhIiNxgRQzNEJSkbH/2gAMAwEAAhEDEQA/APcQAAAAAAAAARsAFEbI5TIJ1wAsOY11SjPEeJBPFeIAaXfB3xjyxi5tL4oZ/Hx/FH+pCbIcoyfSNxVhVVMSGNT2kn8UTxxXiCaYmGuzXUx6Zm08QWadUUQtAMjIeAAAAAAAAAAAAAAAAAAAAAAADJSAAlIgq1RtaqZ2JxNgAnrYgzMbmUIK8pW+pkZnnO6hv16eRzmJqOTvJtvxM248jGD1hyzUtPGyq/inwjYx/ad7U4/GRiV85xE96jS6RVivJEcoGVUvKs+2dHb+Pt6a+nL+42dab3lJ+bZBKUuTfzZNw3JHR0K7qv5NCMYR9kVYV5raTXxZcw+cYiHs1JW6PVFaVIaOjWkuUx0qNKaw4p/sdXlna3VKsrfnjt8Udfg8bGSUou6ezWzPJbI08ozOpQlprB+1Hk0aFt5Jp61OUYV/4WnJbUeH8fJ61Rq3LUZHP5djozipRej/AE8DWo1Dci01lHKyi4vD9i6AyMh4o0AAAAAAAAAAAAAAGADZSK1aoPqzM7FVwAixWJSu3yOWzTMnO6jpH6kmbY9yfAtub6mNNmH5C+5dOD/U1rG1X1y/YjnIhaJJIImHKodBBrHBXnBh3ZZYjiRuqyxGRW7kXhLFhrgJuPUys0RSposuJGyRMkjIgVMfGJIhbCtiuRp5FmDoys/Yk9fB9Tu8NiL25/c83gaOH7QuhB94nOEE2raSVuRreNv1B+lU69jnvKWDqP1aa59z0mjWLMZHnOXekbBSpSqtzh3a9hrWT6RfMj7Pdv6uIfEo07KpGLottT4HLdPm7am5KvBHO+mz0wUjp1E9mn8R5LkYKAAKAAAAADJyHENWQAVsRUOczvGcMbLdmvjKuhxeY4jjm+idilf3HpUuO2T29PaZWnIYOkIzkKk22b9LGCGKHqKHAQNluEvgLIVxFQ1iE0WN4RGhbj4K4uR+cFfhDgLLpD40hd8C+pgouAjgXJwGcAqqDlUIFEjrU7qz56FiUbDWhylzkcmcpiey0qlS1BxTlf1Jvhi34PkaGA7G5pGpCnGnRhRlK86qqRlKC5t8zYa1utGtUzsshzLvIa+1HSS+50Pjq8K/5dTs57y9pr+ZDp9kGH7GVaaUqWMqKoldXXqOS5W6HTZNjpyTpVlwV6eklykuUk+aY/DVSHOa0KcVVbjBx04no2n7prqnGnzHowTWFKuXYyNWCnF77+DLRMmmsoAAAFAbIqYiRamzPxUgAwc/xPDB2er0RysTV7TV/XjHp6xlI5vy1XNTHwX7RYQMY9xWOS6mE2a0GEXfUVxFp7kklcjbLEZ4IkgsTKAnCJkepkUoC042JbCxQZHqQJBJMkSHKI3I1yI+76jHAtWGuIZBTKNSmQMvzRWqRHxkTwmQNkmBxTpTU11tJdUMZDVLVCbjNOPsSShGpFxl0z0bL8SpJST0kr3OT9JmbuPd0o2k0uNp6q72uL2UzKzdGT8Yfsc92/xd8RN6PhUYr5HVVbj1KCkvc4i/oOhKUGa/ZbtRKlCNSSvG/DUitNOTR6dgsXCrCNSm+KMldP7PxPAcqxMnSq3d7cMl8GdZ2A7S9zU7qb/lVWtL34Jv3l4dRltcavWXRSp1PZnrIoiYpqFgiqMzMXI0qxk4yQAcPnFTiry/LaP6EMUR4iV6k31nIlgcb5CWakn9zRt+EKkFhR25mNl6MiOxJFitCQgNbJlIUVCtCxQ0cpCWFFsIGR6kSU0SpDKZLEa2DYcI2USZIRoMibFOaIKiLtaJSmPiTwkV5RK9YuVFoUcSyxSfJKpmdPEunNTi7SjJNfAo5/ie9nKo9FOXFbppsLip3durt8yhndbThRtUG8Y9jm/OSTa+SbJKkX3sUml3Ur9XYrYWdneL06p6xEyJvikutOX0M+lJqXTXVMsanON9HvHo7z/v6Xc1HerSWjb1lDl8jsTwDsxmbw9anXg/ZkuODfuvSS8j3ujVUoqUdVJJp+DRqWlXeOH2i7SnsiOsZGNe/kzWrMxcyfqy8n9Cy+iVHA09W31k/qWolXDfctnEXjzJl6kxzQqQiHIz2W4yHWGtDkwmISKQsRWrhYUaPUhEgaEFQD9h0SWkRxRJCQjF2JQETC4mQyR1EVpwLciGSFTHxlgq1FoZGPZsVTDzR6PyLdvzIk3wjArVfWv+G7MvG1E3ebduSW5br31fjqZGInd3Z0NGJynk6u1XBqZJNcUko29Serbb2KEamtp6r+5FrIfam+lOW5VSUnppLe3KXl4kuOWZbNPDp6NO8eq5ea5Htvo5zLvsJGLd5UW6b8uTPCsG2uqa3/ZnqXooxFpVoPSLhCfx4rfcfbS1qfqWKD5PQ65iZp7Mv9svoblZGLma9WS8H9DWl0y6uzgsItC3YrYd/V/UtHDXf1suwBD0yNMUp4JkyRCtDExYSGtD1IkQNiXAaPUhGwBoaLgfsSRY+LIaZKmI0LsSKQtyO4XGi7D5MjsLcZJghdivWZhZpszcrmFmb0LtuuUJKZz7jfjjzuZGIUYvVcT53eiNZK7klpf7GRODk9rnQ0jmL7+ay9lk241LWVocvEz479H+pfwlNwpVG9Hol1RBSSn0U/0n/kf7splvDri195L+pfudT2Uxsqbqy4mv5KW3+rD9zmKGlraNc9b3N3K6bkqj11pJuza17ymNg8SyiWl2e51kZGOW5s1jKxaN5rJfPPYRs2ukpfUmQYiNqs10mxThr1YqNfcuREQrkIhJIpEg5EkURIkixGOTJAGNiRbG4HZJBLDUxeIBcjoj0RtjVITA7YmcguRhxCYF2JSObC42QqDYrV2YeZSNuuznsykXrZcjZSOfxE7Xfjr4lCc2/Loi1ib7LVvWxXjSXOUVfzbRvQXBzt5LNVlyEWqDf4p+exXguhdnPgpwUXxJuTaa0epHKKfrRTtpdXWj6eQmSDBPQV9X7S523XVnadiMA60qsf8ASW3XvIP7HH4br8/I9R9FWFtCtU6uME/LVklvHaokTUlyd3UMzFo1Jmdi1ubZdOEzWNq8vHhf6DEi1n0LVU+sfoynBnE+UWLiRbh0JYJJDmMuZw8Gx8ZEVxLi4AluKxlw4hMDsj2LciTFDAZHuQ1MRjLipBsT3BSI7iCYDYmuMlIbxiXBINivi5aHN5lPc6DFz0OZx7uzQtFyN2MPHPUr0YN8nzLGMac3528NBuG4nNR5XS02NtcROfqy2m39zQxytwRa0UF8G9RlGdmui0fiujJMRVTqST1je3lbS6G93bbVPZojELlGKT28U1pp5Hs/o8wnd4KF95ylP5s8cwVNv1bXelv2R79lVDu6NOG3DTgv0LtjH8TkWqC9yxMz8WaMzPxSNMsnG9ov/ZHyf1M1Gp2jXrxfgzLucZ5f+pZZp9A2NUhJSImZqQ/JI5ADFTAXIjEuLNkPGKkGSW45MiTI+8YuomSeUhtyNSvzBSF1EySOYORX7yz1HRlcXUTYkTHSkNG1JaCYE2KWNqaHOYupbXpdm1jZnPY57mpawI5yxFsym9b6tl7Lb8adrcKctuiKSvsi9gNFOTfu23vuzSl0YueRYribkut5Lp4lnD9N0/HZ8mQUoNP6eJfowT1slfl0ZE2Pijf7HYB1cTTja6Uk5re0Yu7PbEjhPRnldlPEP3kqcPJbs7w1rOGtPL9y9TjiI2ZRxK3L8inXiWyQ4/tJDSL6Nr4Mwmzqs+o3pvw1OTRyfmqetfb5RYpvgW4jQCJmOPHWsFyGXUa57jtQJalRELkhkpETY9REyW29CMh4xVuLqGSW4yUmI2MnLQVIa2I5XHU52Ktx8ZkmozJejMZVqaFdTIq1Ww1QyxMlPH1DKnhZzhOql6lOyb5cTdki9KnOrUjSprilN2S+/kdjn+URw+WSpxV2nTcpaXlPi1Zt2tu3By+ERVHmLPK+FX19XyV7l+EEoJLect9tEU1B32e/xNOpBNqK9yKT893YdJmZEWhS912Wu/RmrlWClVqRpRtxTlw28epVo07rXktX4Ho/ozyffFSX5KV/7mLSp+pNRJ6ccs7fLMHGjShSjtCKXm+bLQgpuJYWC6BWrRLJHUiKBh46ldNddDhsZScZSj0Z6JiqZymf4L31/wAjJ8vbOrS2S5j/AMJKb5MKMgbGiOWhyeCchvqOmNsKPEGSjYjaJRJxHIQisF7DuMa2OEbG8Y2TEkJKSHJEbYywjYrmQ1JkqjkbkfKqVZylJqMU5Sk7RS1uwgp1JKEE5Sb0SO97MdmVRXeVLSqv5QXReJp2tm5Ma2L2R7OKhHvJq9aaXF+RfhRe7c0f/AqvpwPa/vI6HD0DI9IMLZfW8o/9kbU4KFJpfA2f0s8Lw8Lz1vo22aOHp3fEub102ZUoRdpO9+S+5sZdh27KKu5NLhXNmN2yhFF/JcqnXqwpwuuJ2l+Vc2e14DCRo040oK0YRUV8OZi9juz6w1Pikk6s9X+Rcoo6M1bWjpHL7ZdpxwhBQAtkgCSQoABVrQMrF0L36Pc3JRKtajcGsgefZvlsoNyjdw+jMpnomJw3h/k53MMhT1h6r6cjn73xLb3pf6Jo1PZnNNiXJsXl9Wn7UXZc1qik6hjSoThxJYH5RK5DJTIpVERTqAoBkmcxkqpXlUI3MljSyMbJnMbKYynCUnaMZSf5U2auC7M4iprJKlF85b/ItUrSc3wiNmTOqXcsyKviOThB+/JfRHYZV2Uo07OSdSa96S0+R0lDCpcjWoePUeZCGRkeRUqCtCN5P2pv2m/sdBQoEtKgWoUzTUVFYQg2nTOb9JkrZfVW3FKmv7kdWjjPSjO+GhT/AB1U35RTZFXeKchs/pZ5JQoP1V1382et9guzHcw7+tH+bK3DF+4uT8zM9H/ZZSti68dL3owls/zM9GRVtLf++X7EVKnjlgKAGgTgAAAAAAAAMlEeAAVKtIq1MMajQyUAAw6mE8DPxOS0pe1CPnszp5USKVAbKEZdrIuTjanZag+Ul5SIX2Ro9Z/M7V4cP4Yi/hqX+KDZnGw7JYdcpPzZcodnaEdqUfirnT/ww6OHHKjTXSQZMihgIx0jFR8kkW6eF8DQjRJFTJcYEKdPDlmFImUByQANjEdYUAAQ5LPsBLF4yFH/AONGClVf+5+z8bI60ZToxTbSs5ayfNjJw2WBGhadNRSjFWUUkkuSQ8AHIUAABQAAAAAAAAAAAAAAAAEEYAADbBYAAAsOQAACigAAAAAAAAAAAAAAAAAAAAAAAAAAf//Z' },
        { id: 4, name: 'Tomato', brand: 'Vegitable', price: 40, quantity: 1, status: '', selected: false, image: 'data:image/jpeg;base64,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' },
        { id: 5, name: 'Chilli', brand: 'Vegitable', price: 60, quantity: 1, status: '', selected: false, image: 'data:image/jpeg;base64,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LoxVirxLiyh+ErVf9nMmfx+BVyRaOhp8g4RexTWfZvJD/wAn93+FmP2eyNOzE/vKtiLvQw5HOih/ivAq9l3RZKh38M9zMRqQ7rVIy4rdmJWM4YYkKFGHPI+qm0To1t88SSikrIoU7d6hxQ4cSE7h22+BBxD1ULHsiI6I0PY9pJALg0kGuVSKD2XV0WOf8dTk7p27vxoiuVGL0KE240YaRmf2uHupKBdAEUjRC4flNPZWtFNfx+HvfL5v3JKlFcCFsu7sCDWgxfrDSR40UyAvqLVCnGCtFWRNJLgERFM6EREAREQBERAa8eVY8guaHEaV2Wei+ouJWAREXQacWzYTojYpYC9uh58e9biIuKKXBCwWCblmRGFjxVpFCFnRGr6MGpISUOCwMhijRzJ9TmVtoiJKKsgERF0BERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQH/2Q==' },
    ],
};


export const ProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPROVED:
            return {
                ...state
            };

        case MISSING:
            return {
                ...state
            };

        case MISSING_URGENT:
            return {
                ...state
            };
        
        default:
            return state;
    }
};