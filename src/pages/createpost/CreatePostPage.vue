<template>
  <div>
    <div>
      <!-- 날짜(요일) 버튼-->
      <span v-for="n in 5" :key="n">
        <input
          type="radio"
          class="btn-check"
          name="radios"
          :id="printDays[n - 1].eng"
          v-model="day"
          :value="n.toString()"
        />
        <label
          class="btn btn-outline-success btn-label"
          :for="printDays[n - 1].eng"
          >{{ printDates[n - 1] }}{{ printDays[n - 1].kor }}</label
        >
      </span>
    </div>
    <!--  공백 사각형 추가 -->
    <div class="container" style="margin-top: 60px; margin-bottom: 20px" />

    <!-- 카드 요소들 -->
    <div class="container">
      <div class="row menu1">
        <div class="col-md-4 mb-3" v-for="n in 2" :key="n">
          <div
            class="card"
            @click="writeMenu(n - 1)"
            :class="{ selected: n - 1 == menuType && reviewToggle }"
          >
            <img :src="returnImgName(n, 5)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ titles[n - 1] }}</h5>
              <p class="card-text">{{ printMenu[n - 1] }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="row menu2">
        <div class="col-md-4 mb-3" v-for="n in 3" :key="n">
          <div
            class="card"
            @click="writeMenu(n + 1)"
            :class="{ selected: n + 1 == menuType && reviewToggle }"
          >
            <img :src="returnImgName(n, 7)" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{{ titles[n + 1] }}</h5>
              <p class="card-text">{{ printMenu[n + 1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--  공백 사각형 추가 -->
    <div class="container" style="margin-top: 60px; margin-bottom: 20px" />

    <div class="mb-3">
      <h4>
        {{ printDates[day] }}{{ printDays[day].kor }}
        {{
          reviewToggle
            ? titles[selectedMenu.type]
            : `어떤 메뉴도 선택하지 않았습니다.`
        }}
      </h4>
      <label for="exampleFormControlInput1" class="form-label">별점</label>
      <!--별점넣을 구간-->

      <input
        type="email"
        class="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div class="mb-3">
      <label for="exampleFormControlTextarea1" class="form-label"
        >오늘의 후기</label
      >
      <textarea
        class="form-control"
        id="exampleFormControlTextarea1"
        rows="3"
      ></textarea>
    </div>
    <div class="rating">
      <label class="rating__label rating__label--half" for="starhalf0.5">
        <input
          type="radio"
          id="starhalf0.5"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--full" for="star1.0">
        <input
          type="radio"
          id="star1.0"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf1.5">
        <input
          type="radio"
          id="starhalf1.5"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf2.0">
        <input
          type="radio"
          id="starhalf2.0"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf2.5">
        <input
          type="radio"
          id="starhalf2.5"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf3.0">
        <input
          type="radio"
          id="starhalf3.0"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf3.5">
        <input
          type="radio"
          id="starhalf3.5"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf4.0">
        <input
          type="radio"
          id="starhalf4.0"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf4.5">
        <input
          type="radio"
          id="starhalf4.5"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
      <label class="rating__label rating__label--half" for="starhalf5.0">
        <input
          type="radio"
          id="starhalf5.0"
          class="rating__input"
          name="rating"
          value=""
        />
        <span class="star-icon"></span>
      </label>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref, watch } from "vue";
const list = ref([]); // 메뉴를 넣을 배열
const dates = ref([]); // 중복 없는 날짜 모음
const printDates = ref([]);
const printDays = ref([
  { kor: "(월)", eng: "mon" },
  { kor: "(화)", eng: "tue" },
  { kor: "(수)", eng: "wed" },
  { kor: "(목)", eng: "thu" },
  { kor: "(금)", eng: "fri" },
]);
const titles = ref([
  "20F 한식",
  "20F 일품",
  "10F 도시락",
  "10F 샌드위치 & 샐러드",
  "10F 샐러드",
]);
const printMenu = ref([]);
const day = ref(0); // 숫자 형태

const setMenus = (val) => {
  list.value.map((ele) => {
    const thisDate = new Date(ele.date);
    if (thisDate.getDay() == val) printMenu.value[ele.type] = ele.content;
  });
};

watch(day, (nl, ol) => setMenus(nl)); // day가 바뀔 때

onMounted(() => {
  // 맨 처음에 페이지가 생길 때
  axios
    .get(import.meta.env.VITE_SERVER_MAIN_URL + "/menu")
    .then((response) => {
      // console.log(response.data);
      list.value = response.data;
      const datevalue = new Set();
      list.value.map((element) => datevalue.add(element.date)); // 날짜 세팅하기
      dates.value = [...datevalue];
      dates.value.map((ele) => printDates.value.push(ele.substring(5, 10)));
      // 데이터를 변수에 할당하는 작업 수행
      day.value = new Date().getDay(); // 현재 요일로 초기화
      day.value = day.value == 6 || day.value == 0 ? 1 : day.value; // 토요일이거나 일요일이면 다음 주 식단, 월요일로 세팅합니다.
      setMenus(day.value);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
});

const returnImgName = (n, add) => {
  // 이미지 이름 임시부여
  let N = n + add;
  return "/image (" + N + ").png";
};

// review

const reviewToggle = ref(false);
const selectedMenu = ref({});
const menuType = ref();

const writeMenu = (index) => {
  //
  let menu;

  list.value.map((ele) => {
    if (ele.content == printMenu.value[index]) {
      menu = ele;
      console.log(menu);
      menuType.value = menu.type;
      console.log(menuType.value);
    }
  });
  if (selectedMenu.value !== menu) {
    //지금 메뉴가 그 전 메뉴랑 다를 때
    reviewToggle.value = true;
    selectedMenu.value = menu;
  } else {
    // selectMenu.value === menu
    reviewToggle.value = !reviewToggle.value;
  }

  const rateWrap = document.querySelectorAll(".rating"),
    label = document.querySelectorAll(".rating .rating__label"),
    input = document.querySelectorAll(".rating .rating__input"),
    labelLength = label.length,
    opacityHover = "0.5";

  let stars = document.querySelectorAll(".rating .star-icon");

  checkedRate();

  rateWrap.forEach((wrap) => {
    wrap.addEventListener("mouseenter", () => {
      stars = wrap.querySelectorAll(".star-icon");

      stars.forEach((starIcon, idx) => {
        starIcon.addEventListener("mouseenter", () => {
          if (wrap.classList.contains("readonly") == false) {
            initStars(); // 기선택된 별점 무시하고 초기화
            filledRate(idx, labelLength); // hover target만큼 별점 active

            // hover 시 active된 별점의 opacity 조정
            for (let i = 0; i < stars.length; i++) {
              if (stars[i].classList.contains("filled")) {
                stars[i].style.opacity = opacityHover;
              }
            }
          }
        });

        starIcon.addEventListener("mouseleave", () => {
          if (wrap.classList.contains("readonly") == false) {
            starIcon.style.opacity = "1";
            checkedRate(); // 체크된 라디오 버튼 만큼 별점 active
          }
        });

        // rate wrap을 벗어날 때 active된 별점의 opacity = 1
        wrap.addEventListener("mouseleave", () => {
          if (wrap.classList.contains("readonly") == false) {
            starIcon.style.opacity = "1";
          }
        });

        // readonnly 일 때 비활성화
        wrap.addEventListener("click", (e) => {
          if (wrap.classList.contains("readonly")) {
            e.preventDefault();
          }
        });
      });
    });
  });

  // target보다 인덱스가 낮은 .star-icon에 .filled 추가 (별점 구현)
  function filledRate(index, length) {
    if (index <= length) {
      for (let i = 0; i <= index; i++) {
        stars[i].classList.add("filled");
      }
    }
  }

  // 선택된 라디오버튼 이하 인덱스는 별점 active
  function checkedRate() {
    let checkedRadio = document.querySelectorAll(
      '.rating input[type="radio"]:checked'
    );

    initStars();
    checkedRadio.forEach((radio) => {
      let previousSiblings = prevAll(radio);

      for (let i = 0; i < previousSiblings.length; i++) {
        previousSiblings[i].querySelector(".star-icon").classList.add("filled");
      }

      radio.nextElementSibling.classList.add("filled");

      function prevAll() {
        let radioSiblings = [],
          prevSibling = radio.parentElement.previousElementSibling;

        while (prevSibling) {
          radioSiblings.push(prevSibling);
          prevSibling = prevSibling.previousElementSibling;
        }
        return radioSiblings;
      }
    });
  }

  // 별점 초기화 (0)
  function initStars() {
    for (let i = 0; i < stars.length; i++) {
      stars[i].classList.remove("filled");
    }
  }
};
</script>

<style scoped>
.btn-label {
  margin-left: 70px;
  /* 원하는 만큼의 여백을 지정합니다. */
}

.menu1 {
  justify-content: space-evenly;
  /* 첫 번째 줄 카드 요소들을 균등하게 배치합니다. */
}

.menu2 {
  justify-content: space-around;
  /* 두 번째 줄 카드 요소들을 균등하게 배치합니다. */
}

.selected {
  background-color: rgba(223, 219, 219, 0.693);
  /* 회색 배경색 */
}

.rating__input {
  /*display: none; 라디오버튼 hide*/
}

.rating__label {
  width: 12px; /* 원본 사이즈/2 */
  overflow: hidden;
  cursor: pointer;
}

.rating__label .star-icon {
  width: 12px; /* 원본 사이즈/2 */
  height: 24px;
  display: block;
  position: relative;
  left: 0;
  background-image: url("C:\Users\SSAFY\Desktop\pistachio-Front\src\assets\svg\arrowLeftIcon.svg");
  background-repeat: no-repeat;
}

.rating__label--full .star-icon {
  background-position: right;
}
.rating__label--half .star-icon {
  background-position: left;
}
</style>
