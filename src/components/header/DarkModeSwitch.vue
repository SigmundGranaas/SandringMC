<template>
  <div class="flex items-center">
    <label class="flex items-center  cursor-pointer" for="darkmode-toggle">
      <input id="darkmode-toggle" v-model="darkMode" class="sr-only" type="checkbox">
      <svg :class="{dark:darkMode}" fill="none" height="26" viewBox="0 0 53 26" width="53"
           xmlns="http://www.w3.org/2000/svg">
        <g id="darkmode-toggle">
          <g clip-path="url(#clip0_3_2373)">
            <rect id="bg" fill="#13221F" height="24" rx="12" width="50.6667" x="1" y="1"/>
            <g id="clouds">
              <g id="Frame 24" clip-path="url(#clip1_3_2373)">
                <ellipse id="Ellipse 2" cx="43.0752" cy="14.9484" fill="#F9F9F9" rx="4.21231"
                         ry="2.35294" transform="rotate(-178.973 43.0752 14.9484)"/>
                <ellipse id="Ellipse 3" cx="41.3422" cy="16.094" fill="#F9F9F9" rx="2.95455"
                         ry="3.05882" transform="rotate(-178.973 41.3422 16.094)"/>
                <ellipse id="Ellipse 4" cx="44.2835" cy="16.8528" fill="#F9F9F9" rx="1.81818"
                         ry="1.88235" transform="rotate(-178.973 44.2835 16.8528)"/>
                <ellipse id="Ellipse 5" cx="43.6609" cy="13.5469" fill="#F9F9F9" rx="2.5"
                         ry="1.88235" transform="rotate(-178.973 43.6609 13.5469)"/>
              </g>
              <g id="Frame 25" clip-path="url(#clip2_3_2373)">
                <ellipse id="Ellipse 2_2" cx="34.7562" cy="9.17649" fill="#F9F9F9" rx="5.45455" ry="2.35294"/>
                <ellipse id="Ellipse 3_2" cx="37.7108" cy="7.99999" fill="#F9F9F9" rx="2.95455" ry="3.05882"/>
                <ellipse id="Ellipse 4_2" cx="34.7562" cy="7.2941" fill="#F9F9F9" rx="1.81818" ry="1.88235"/>
                <ellipse id="Ellipse 5_2" cx="35.438" cy="10.5882" fill="#F9F9F9" rx="2.5" ry="1.88235"/>
                <path id="Ellipse 6"
                      d="M33.7273 8.70585C33.7273 9.8754 33.3134 10.8235 31.6819 10.8235C30.0504 10.8235 28.7273 9.8754 28.7273 8.70585C28.7273 7.53631 30.5049 5.88232 32.1364 5.88232C33.7679 5.88232 33.7273 7.53631 33.7273 8.70585Z"
                      fill="#F9F9F9"/>
              </g>
              <g id="Frame 23" clip-path="url(#clip3_3_2373)">
                <ellipse id="Ellipse 2_3" cx="31.3173" cy="18.9707" fill="#F9F9F9" rx="5.45455"
                         ry="2.35294" transform="rotate(-178.973 31.3173 18.9707)"/>
                <ellipse id="Ellipse 3_3" cx="28.3422" cy="20.094" fill="#F9F9F9" rx="2.95455"
                         ry="3.05882" transform="rotate(-178.973 28.3422 20.094)"/>
                <ellipse id="Ellipse 4_3" cx="31.2835" cy="20.8528" fill="#F9F9F9" rx="1.81818"
                         ry="1.88235" transform="rotate(-178.973 31.2835 20.8528)"/>
                <ellipse id="Ellipse 5_3" cx="30.6609" cy="17.5469" fill="#F9F9F9" rx="2.5"
                         ry="1.88235" transform="rotate(-178.973 30.6609 17.5469)"/>
                <path id="Ellipse 6_2"
                      d="M32.3376 19.4597C32.3586 18.2904 32.7894 17.3498 34.4207 17.3791C36.0519 17.4083 37.3578 18.38 37.3368 19.5494C37.3158 20.7187 35.5089 22.3406 33.8776 22.3113C32.2464 22.2821 32.3166 20.6291 32.3376 19.4597Z"
                      fill="#F9F9F9"/>
              </g>
            </g>
            <g id="stars">
              <path id="Star 1"
                    d="M24.2945 6.42307L23.8609 8.43436L25.6397 9.46828L23.5929 9.67741L23.1593 11.6887L22.3279 9.80665L20.281 10.0158L21.814 8.64349L20.9826 6.76144L22.7615 7.79536L24.2945 6.42307Z"
                    fill="#D9D9D9"/>
              <path id="Star 2"
                    d="M18.7761 15.8332L18.8985 18.169L21.1577 18.7743L18.9741 19.6126L19.0965 21.9483L17.6246 20.1306L15.441 20.9688L16.7149 19.0072L15.2429 17.1895L17.5022 17.7948L18.7761 15.8332Z"
                    fill="#D9D9D9"/>
              <path id="Star 3"
                    d="M12.4769 6.61121L12.7853 8.99725L15.1498 9.44132L12.9759 10.4719L13.2842 12.858L11.6323 11.1089L9.45829 12.1394L10.6113 10.0278L8.95937 8.27874L11.3239 8.7228L12.4769 6.61121Z"
                    fill="#D9D9D9"/>
            </g>
            <g id="main-circle-group">
              <ellipse id="main-circle" cx="40" cy="13.5" fill="#363636" rx="8.57216" ry="8.5"/>
              <path id="moon"
                    d="M40.2302 13.7284C39.3143 12.1554 39.5106 10.2512 40.5735 8.90835C40.8771 8.52306 40.4736 7.9727 40.0015 8.11959C39.4506 8.294 38.9147 8.56556 38.4174 8.94424C36.5649 10.3573 35.9106 12.9114 36.8611 15.0226C38.1271 17.8286 41.5143 18.868 44.1303 17.3704C44.455 17.1844 44.7459 16.9709 45.0144 16.7291C45.3832 16.3946 45.1113 15.7748 44.616 15.841C42.8525 16.0927 41.1134 15.2554 40.2302 13.7284Z"
                    fill="#B2CCCC"/>
            </g>
          </g>
          <rect id="bg-border" height="25" rx="12.5" stroke="#3F3F46" stroke-width="2" width="51.6667" x="0.5" y="0.5"/>
        </g>
        <defs>
          <clipPath id="clip0_3_2373">
            <rect fill="white" height="24" rx="12" width="50.6667" x="1" y="1"/>
          </clipPath>
          <clipPath id="clip1_3_2373">
            <rect fill="white" height="8" transform="translate(50.9976 19.2676) rotate(-178.973)" width="15"/>
          </clipPath>
          <clipPath id="clip2_3_2373">
            <rect fill="white" height="8" transform="translate(28 5)" width="15"/>
          </clipPath>
          <clipPath id="clip3_3_2373">
            <rect fill="white" height="8" transform="translate(37.9976 23.2676) rotate(-178.973)" width="15"/>
          </clipPath>
        </defs>
      </svg>
    </label>
  </div>
</template>

<script setup>
const mode = useColorMode()

const darkMode = ref(true)

darkMode.value = mode.value === 'dark'

watch(darkMode, (val) => {
  if (val) {
    mode.value = 'dark'
  } else {
    mode.value = 'light'
  }
})

</script>


<style scoped>

#bg,
#stars,
#clouds,
#main-circle-group,
#main-circle,
#moon,
#stars {
  transition: all 0.3s ease-out;
}

svg:not(.dark) #main-circle-group {
  transform: translateX(-26px);
}

svg:not(.dark) #main-circle {
  fill: #ffe77f;
}

svg:not(.dark) #moon {
  opacity: 0;
}

svg:not(.dark) #stars {
  opacity: 0;
}

svg:not(.dark) #bg {
  fill: #47cfff;
}

svg:not(.dark) #bg-border {
  stroke: #3aa8d2;
}

svg:is(.dark) #clouds {
  opacity: 0;
}

</style>