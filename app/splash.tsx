import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, Animated } from 'react-native';
import { useRouter } from 'expo-router';

const { width, height } = Dimensions.get('window');

export default function SplashScreen() {
  const router = useRouter();
  const slideAnim = useRef(new Animated.Value(-width)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showSvg, setShowSvg] = useState(false);

  useEffect(() => {
    // Slide in animation
    Animated.parallel([
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start(() => {
      // Show SVG after slide-in animation completes
      setShowSvg(true);
    });

    // Start slide out animation after 5 seconds (leaving 1 second for slide out)
    const timer = setTimeout(() => {
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: width,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]).start(() => {
        router.replace('/(tabs)');
      });
    }, 7000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.logoContainer,
          {
            transform: [{ translateX: slideAnim }],
            opacity: fadeAnim,
          }
        ]}
      >
        {showSvg && (
          <svg xmlns="http://www.w3.org/2000/svg" width="80%" viewBox="0 0 1355.696512 650" data-app="Xyris">
    <defs>
    </defs>
    <g transform="">
        <path d="M 155.364 148.372 C 155.364 148.372 167.8 461.458 212.107 468.67 C 244.211 473.897 418.919 52.0578 418.919 52.0578" fill="none" stroke="rgb(202, 242, 206)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="70" transform="" strokeDasharray="2000">
            <animate attributeName="stroke-dashoffset" keyTimes="0; 0.007299611234309479; 0.5838952279918205; 1" values="2000;2000;0;0" begin="-0.00001" dur="1.7080199999999999" fill="freeze" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1">
            </animate>
        </path>
        <path d="M 975.141 148.372 C 975.141 148.372 987.59 461.458 1031.88 468.67 C 1063.99 473.897 1238.7 52.0578 1238.7 52.0578" fill="none" stroke="rgb(202, 242, 206)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="70" transform="" strokeDasharray="2000">
            <animate attributeName="stroke-dashoffset" keyTimes="0; 0.5979607356039005; 1" values="2000; 2000; 0" begin="-0.00001" dur="2.50305542895772" fill="freeze" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1">
            </animate>
        </path>
        <path d="M 700.85 406.695 C 700.85 406.695 826.993 332.332 864.388 234.168 C 901.791 136.004 793.103 83.4152 707.794 217.808 C 622.485 352.198 718.064 480.944 834.571 468.719 C 975.293 453.953 981.554 240.011 981.554 240.011" fill="none" stroke="rgb(202, 242, 206)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="70" transform="" strokeDasharray="2000">
            <animate attributeName="stroke-dashoffset" keyTimes="0; 0.49892727642385143; 1" values="2000;2000;0" begin="-0.00001" dur="1.9988945785924994" fill="freeze" calcMode="spline" keySplines="0 0 1 1;0 0 1 1">
            </animate>
        </path>
        <path d="M 437.354 406.695 C 437.354 406.695 563.497 332.332 600.892 234.168 C 638.288 136.004 529.607 83.4152 444.298 217.808 C 358.989 352.198 455.61 488.507 571.074 468.719 C 615.265 461.145 660.436 436.627 701.164 407.128" fill="none" stroke="rgb(202, 242, 206)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="70" transform="" strokeDasharray="2000" strokeOpacity="1">
            <animate attributeName="stroke-dashoffset" keyTimes="0; 0.3582148331210845; 1" values="2000; 2000; 0" begin="-0.06412210317460316" dur="1.560849009516786" fill="freeze" calcMode="spline" keySplines="0 0 1 1;0 0 1 1">
            </animate>
        </path>
    </g>
    <g transform="">
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 804.974 613.271 C 804.974 617.466 804.974 621.366 804.974 625.609 C 802.648 625.609 800.432 625.609 798.218 625.609 C 791.268 625.609 784.319 625.662 777.374 625.55 C 776.258 625.532 774.883 625.063 774.095 624.316 C 766.893 617.454 759.832 610.457 752.664 603.565 C 746.231 597.391 739.715 591.298 732.871 584.818 C 732.871 598.607 732.871 611.92 732.871 625.42 C 725.14 625.42 717.662 625.42 709.989 625.42 C 709.989 604.723 709.989 583.931 709.989 562.91 C 710.599 562.865 711.34 562.757 712.08 562.753 C 718.642 562.74 725.234 563.17 731.743 562.611 C 736.731 562.181 740.179 564.086 743.451 567.299 C 748.81 572.546 754.196 577.769 759.654 582.909 C 766.699 589.548 773.831 596.098 781.286 603.013 C 781.286 589.471 781.286 576.271 781.286 562.91 C 789.294 562.91 796.972 562.91 804.974 562.91 C 804.974 579.584 804.974 596.28 804.974 613.271 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 595.826 567.475 C 595.826 565.83 595.826 564.468 595.826 562.746 C 598.525 562.746 601.126 562.746 603.726 562.746 C 608.424 562.746 613.17 563.17 617.806 562.629 C 622.663 562.064 626.089 563.98 629.306 567.111 C 633.625 571.323 638.007 575.465 642.377 579.626 C 650.335 587.193 658.303 594.753 666.274 602.309 C 666.465 602.49 666.742 602.579 667.346 602.914 C 667.346 589.448 667.346 576.242 667.346 562.893 C 675.156 562.893 682.637 562.893 690.266 562.893 C 690.266 583.714 690.266 604.505 690.266 625.609 C 683.147 625.609 676.01 625.221 668.939 625.732 C 663.373 626.132 659.51 624.387 655.796 620.268 C 650.523 614.422 644.549 609.212 638.869 603.736 C 633.751 598.801 628.645 593.86 623.49 588.966 C 622.112 587.656 620.571 586.522 618.858 585.1 C 618.858 598.625 618.858 611.948 618.858 625.438 C 611.132 625.438 603.651 625.438 595.826 625.438 C 595.826 606.244 595.826 587.004 595.826 567.475 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 1011.77 625.609 C 1004.92 625.609 998.359 625.568 991.802 625.638 C 990.198 625.655 989.135 625.332 987.982 623.957 C 984.998 620.391 981.673 617.107 978.454 613.741 C 973.472 608.536 968.436 603.382 963.484 598.149 C 961.375 595.928 959.413 593.568 957.103 590.946 C 961.122 590.946 964.888 591.099 968.637 590.905 C 972.355 590.706 976.086 590.329 979.764 589.718 C 983.542 589.089 986.896 585.828 987.096 583.068 C 987.407 578.761 984.529 575.33 979.565 575.167 C 971.028 574.878 962.474 575.084 953.696 575.084 C 953.696 591.522 953.696 608.401 953.696 625.444 C 945.208 625.444 936.948 625.444 928.51 625.444 C 928.51 604.681 928.51 583.891 928.51 562.882 C 929.292 562.839 930.138 562.753 930.978 562.753 C 949.572 562.746 968.173 562.458 986.761 562.882 C 994.904 563.063 1002.87 564.785 1009.46 570.595 C 1015.93 576.3 1013.96 588.178 1007.25 592.62 C 1003.58 595.052 999.533 596.915 995.52 599.107 C 1003.53 607.625 1011.73 616.355 1020.43 625.609 C 1017.19 625.609 1014.63 625.609 1011.77 625.609 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 534.825 575.084 C 534.015 575.636 533.058 576.176 533.035 576.753 C 532.892 580.167 532.963 583.591 532.963 587.251 C 547.555 587.251 562.089 587.251 576.823 587.251 C 576.823 591.628 576.823 595.786 576.823 600.181 C 562.43 600.181 547.897 600.181 533.165 600.181 C 533.165 604.558 533.165 608.717 533.165 613.106 C 547.564 613.106 562.098 613.106 576.828 613.106 C 576.828 617.296 576.828 621.256 576.828 625.415 C 553.999 625.415 531.048 625.415 507.899 625.415 C 507.899 604.74 507.899 583.943 507.899 562.946 C 530.72 562.946 553.671 562.946 576.825 562.946 C 576.825 566.758 576.825 570.724 576.825 575.084 C 563.009 575.084 549.06 575.084 534.825 575.084 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 890.588 581.681 C 898.689 596.286 906.633 610.727 914.815 625.609 C 906.197 625.609 898.284 625.644 890.37 625.544 C 889.665 625.532 888.707 624.757 888.32 624.074 C 886.675 621.208 885.1 618.294 883.703 615.303 C 882.915 613.624 881.816 613.218 880.072 613.236 C 871.758 613.318 863.445 613.271 854.409 613.271 C 855.32 611.525 856.019 610.163 856.73 608.818 C 856.866 608.565 857.113 608.371 857.236 608.112 C 858.499 605.568 859.122 601.792 861.143 600.774 C 863.733 599.47 867.44 600.381 870.666 600.345 C 872.217 600.334 873.762 600.345 875.848 600.345 C 872.657 594.248 869.649 588.513 866.494 582.492 C 858.903 597.032 851.492 611.244 844.038 625.526 C 835.648 625.526 827.152 625.526 818.217 625.526 C 829.832 604.453 841.305 583.632 852.811 562.746 C 861.348 562.746 869.86 562.704 878.373 562.805 C 879.202 562.816 880.371 563.474 880.776 564.18 C 884.073 569.913 887.227 575.736 890.588 581.681 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 449.539 593.883 C 449.539 600.427 449.539 606.68 449.539 613.165 C 464.004 613.165 478.34 613.165 492.845 613.165 C 492.845 617.354 492.845 621.314 492.845 625.444 C 470.124 625.444 447.369 625.444 424.446 625.444 C 424.446 604.681 424.446 583.885 424.446 562.917 C 432.668 562.917 440.935 562.917 449.539 562.917 C 449.539 573.115 449.539 583.35 449.539 593.883 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 307.952 568.076 C 307.952 566.618 307.952 565.454 307.952 564.104 C 310.441 564.104 312.833 564.104 315.533 564.104 C 315.533 570.795 315.533 577.58 315.533 585.001 C 316.72 584.285 317.509 583.99 318.053 583.449 C 323.292 578.238 334.984 578.82 340.195 582.88 C 346.373 587.697 349.073 593.86 349.176 601.668 C 349.263 608.171 347.864 614.006 343.614 618.887 C 340.549 622.401 336.602 624.556 331.781 625.056 C 325.501 625.709 320.119 623.869 315.389 619.34 C 314.928 621.085 314.579 622.412 314.218 623.775 C 312.191 623.775 310.25 623.775 307.952 623.775 C 307.952 605.287 307.952 586.828 307.952 568.076 M 326.015 617.383 C 329.942 618.571 333.135 617.26 336.198 614.764 C 341.575 610.369 342.85 601.186 339.784 594.842 C 337.581 590.276 334.069 587.104 329.065 586.986 C 324.829 586.892 321.173 588.931 318.616 592.832 C 313.013 601.38 315.995 612.348 326.015 617.383 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 361.813 584.618 C 365.463 593.83 368.953 602.861 372.736 612.642 C 374.624 607.779 376.266 603.606 377.862 599.425 C 380.038 593.702 382.143 587.956 384.391 582.268 C 384.625 581.675 385.6 581.064 386.269 581.017 C 388.502 580.865 390.751 580.959 393.365 580.959 C 390.673 587.674 388.115 594.124 385.5 600.557 C 381.208 611.108 377.032 621.714 372.499 632.159 C 370.347 637.123 366.751 640.461 360.617 639.773 C 358.345 639.52 356.904 639.18 357.271 636.465 C 357.451 635.126 357.301 633.746 357.301 632.3 C 357.657 632.206 357.919 632.059 358.159 632.089 C 363.953 632.823 368.61 628.952 368.344 623.046 C 368.236 620.621 366.92 618.206 365.959 615.862 C 361.389 604.711 356.749 593.59 352.15 582.444 C 352.012 582.11 352.055 581.693 351.993 581.135 C 354.874 581.135 357.655 581.135 360.633 581.135 C 360.945 582.145 361.298 583.292 361.813 584.618 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 1025.86 568.492 C 1025.93 567.793 1025.98 567.34 1026.1 566.359 C 1028.55 568.529 1027.43 570.319 1026.88 572.089 C 1026.54 572.106 1026.19 572.129 1025.85 572.147 C 1025.85 571.006 1025.85 569.872 1025.86 568.492 Z" transform="">
        </path>
        <path fill="rgb(192, 192, 192)" opacity="1.000000" stroke="none" d="M 1024.42 573.32 C 1023.39 575.6 1021.83 574.296 1020.28 573.797 C 1020.82 573.327 1021.33 572.962 1021.74 572.511 C 1022.15 572.047 1022.45 571.494 1022.81 570.983 C 1023.05 571.512 1023.26 572.058 1023.54 572.57 C 1023.69 572.85 1023.97 573.068 1024.42 573.32 Z" transform="">
        </path>
        <animate attributeName="opacity" keyTimes="0; 0.41800858867029383; 0.6659719633362925; 1" values="0; 0; 1; 1" begin="-0.00001" dur="5.988020000000001" fill="freeze" calcMode="spline" keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1">
        </animate>
    </g>
          </svg>
        )}

      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#012827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});