import { Link } from "gatsby";
import React from "react";
import classes from "./Header.module.css";

const Header = () => (
  <header className={classes.Header}>
    <svg className={classes.Branches} preserveAspectRatio="xMidYMid" width="100%" viewBox="0 -50 1600 400"><path fill="#676768" d="M0,115.34l6,.3a103.53,103.53,0,0,1,13,1.7c4.1.7,10,1.7,13,2.1s13.2,3.1,22.5,6.1c16.3,5.2,17.7,5.5,32.5,6.4,8.5.5,18.2,1.6,21.5,2.4s8.7,1.7,12,2,10.3,1.6,15.5,2.7a116.12,116.12,0,0,0,17,2.3c4.1.2,10.4.7,14,1.1a152.8,152.8,0,0,0,16.5.8c8.9-.1,11.1-.5,20-3.7,11.3-4.2,17.3-4.7,21.3-1.8a37.83,37.83,0,0,0,8.7,3.5c3.3,1,11.6,4.7,18.5,8.2,7.2,3.8,15.2,7.2,19,8a42.75,42.75,0,0,1,19.5,9.4c6.4,5.1,12.6,7.1,21.4,7.1,9.9,0,16.8-1.5,32.2-6.7,15.8-5.4,21.3-6.2,49.7-7.3,20.5-.7,25.3-1.5,22.7-4-.6-.4-11.5-.5-24.5-.1-15.6.5-24.1.3-25.2-.3-1.2-.8-3.1-.4-7.5,1.5-7.8,3.5-29.3,10.3-37.1,11.9-15,2.9-31.4-3-35.2-12.6-1.3-3.3-1.7-3.6-4.5-3.1-6,1.2-21.5-3.1-21.5-5.9,0-1.5,2.3-3.5,8-6.7a59.47,59.47,0,0,0,10.9-9.8c10.3-11.6,12.8-12.2,15.2-3.9a16.69,16.69,0,0,0,3.5,6l2.3,2.1-.1-3.1c-.1-2-.8-3.6-2-4.2-2.5-1.3-2.4-4.9.2-4.9,2.9,0,2.5-1.8-.6-2.6-3.7-.9-2.1-2,9.6-5.9l10.4-3.5,3.4,2c4.3,2.6,5.3,1.8,2.2-1.5-1.3-1.4-2.2-2.6-1.9-2.8,5.1-4.3,19.6-14.1,21.6-14.6a4.52,4.52,0,0,0,3.4-3.5c.4-1.5,3.2-5.3,6.1-8.4s8.6-10.1,12.5-15.4c8.5-11.4,16.3-17.3,22.5-16.9,7.6.4,11.9-3,24.7-19.1,3.3-4.3,6.1-8,6.1-8.3s-.9-.5-1.9-.5-3.3,1.7-5,3.8c-15.7,19.5-16.6,20.2-25.2,20.2-4.1,0-6.3.5-8.2,2a16.33,16.33,0,0,1-2.9,2c-.3,0-1.3-3.7-2.2-8.3-2.6-11.8-2.4-11.3-4.1-9.6-1.2,1.2-1.2,2.3,0,8.3.8,3.8,1.7,7.7,2,8.6.4,1.1-1,3.7-3.8,7.1-2.4,3-6.8,8.8-9.9,12.9a136.65,136.65,0,0,1-11.2,13c-3.1,3-5.6,5.9-5.6,6.5-.1,1.5-17,12.8-17,11.3,0-2.7,16.5-29.8,22.6-37.1,2.4-2.8,3.2-5.7,1.6-5.7-1.9,0-16.1,20.6-23.8,34.5a79.18,79.18,0,0,1-5,8.3,9.55,9.55,0,0,0-1.9,3.1c-.4,1.5-3.5,2.9-11.8,5.6-6.2,1.9-12.4,3.9-13.9,4.4-2.2.7-3.3.3-6.7-2.7-2.3-1.9-4.1-4.1-4.1-4.9,0-1.9-3.9-1.6-18.4,1.2-18.2,3.7-27.5,6.9-35.2,12.1l-6.7,4.6-4.3-4.8c-2.4-2.6-4.7-5.6-5-6.8a25.36,25.36,0,0,0-4-5.9c-1.9-2-3.4-4.3-3.4-5.1,0-1.6-8.5-9.6-14-13.2-2.4-1.6-5.2-2.3-9-2.5-6.9-.2-22.8,3.2-34.5,7.4-8.4,3-9.9,3.2-22,3.2A182.25,182.25,0,0,1,103,94c-4.7-.7-10.4-1.5-12.7-1.8-5.1-.7-16.7,2-20.5,4.7a11.14,11.14,0,0,1-5,1.9c-1.3,0-5.9,1.8-10.3,4.1-7.4,3.8-8.5,4-14.3,3.6a36.81,36.81,0,0,1-11.5-3c-3.9-1.9-7.6-2.6-14.7-3.1a105.8,105.8,0,0,1-11.7-1.2L0,98.64Z"/><path fill="#676768" d="M1600,108.11l-3.5.93a94.42,94.42,0,0,1-12,1.4c-6,.5-10.3,1.4-13,2.7s-6.7,2.2-11.5,2.5c-7.2.4-8,.2-14.8-3.2-3.9-2-8.4-3.6-9.9-3.6a7.54,7.54,0,0,1-4.7-1.9c-1.2-1-5.2-2.6-9.1-3.5s-8.1-2.3-9.5-3.1c-2.1-1.1-2.8-1.1-5,.5-3.3,2.3-19.3,4.3-34,4.4-10.5,0-12.2-.3-19.6-3.1-7.6-2.9-21.2-6.3-33.3-8.3-4.4-.8-5.9-.6-8.3.8-4.2,2.5-15.8,13.8-15.8,15.5,0,.7-1.2,2.4-2.6,3.8a18.49,18.49,0,0,0-4.1,5.8c-2,4.7-8.4,12.1-10.4,12.1-1,0-3-1.1-4.6-2.4-7.2-6-19.4-10.4-39.3-14.1-12.9-2.4-14.3-2.2-19.2,3.1-3.7,4-4.5,4.4-7.2,3.8-6.9-1.4-24.2-7.7-25.1-9.2a22.87,22.87,0,0,0-2.6-3.2,95.44,95.44,0,0,1-6.3-10.4c-9-16.5-21.4-33.5-23.5-32.2-.7.5.3,2.6,3.2,6.4a244.18,244.18,0,0,1,17.6,27.3c4.4,8.2,4.8,9.4,2.7,8.6-2.6-1-15.6-11-15.6-11.9,0-.6-2-2.8-4.4-4.9s-8.6-9.4-13.8-16-10.1-13.1-11-14.3c-1.6-2.1-1.6-2.7.3-11.1,1.3-5.6,1.6-9.2,1-9.8-1.3-1.3-3.1.1-3.1,2.5,0,2.1-2.9,14-3.6,14.7-.2.2-1.9-.7-3.9-2-2.6-1.8-4.2-4.3-6.6-9.9-4.6-11.2-4.8-17.4-1-29.2,3.9-12.3,4.9-18.2,3-17.6-.7.2-1.7,2.2-2.2,4.4s-2.1,8.2-3.8,13.4c-3.8,11.5-3.5,17.8,1,29.1,1.7,4.3,2.6,7.8,2,8.3-1.1,1.3-7.9-.8-11.3-3.5-1.5-1.1-5.3-5.5-8.5-9.7-7.5-9.9-9.8-11.9-11.3-10.4-.9.9-.5,2,1.8,4.4,1.7,1.8,5.1,6,7.6,9.3,8.3,10.9,12.2,13.5,20.2,13.5a12.38,12.38,0,0,1,7.6,2.5c1.9,1.4,3.9,2.5,4.6,2.5s5.2,5.3,10.1,11.7,11,14,13.6,16.8,5.1,6.2,5.4,7.6a5,5,0,0,0,3.2,3.6c3.4,1.2,22.1,14.3,22.1,15.4,0,.5-.9,1.3-2,1.9a3.57,3.57,0,0,0-2,2.6c0,1.2.8,1,4-.8l4-2.3,8.2,2.9c4.6,1.6,9.9,3.5,11.8,4.4l3.5,1.5-2.9.6c-3.5.7-4.7,3.1-1.7,3.1,2.7,0,2.7,2.2.1,4.5-2.2,2-2.8,6.9-.7,6.3.6-.2,2.6-3.1,4.2-6.3s3.7-6.1,4.5-6.3,5.5,3.9,10.6,9.1c5.4,5.6,10.9,10.2,13.6,11.6,8.6,4.1,6.8,7.8-5,10.5-4.9,1.1-8.2,1.3-12.2.6-12.4-1.9-50.3-10.3-61.5-13.5-6.6-1.9-16.9-4.4-23-5.5s-12-2.3-13.2-2.5c-2-.5-4.1,1-3,2.1.2.3,6.9,1.8,14.8,3.4s19,4.3,24.5,5.9,18.4,4.6,28.5,6.6c20,3.9,29.9,6.4,29.9,7.4,0,1.7-7,7.2-12,9.5-6.6,3.1-17.6,3.5-27.8,1.1-9-2.1-31.3-9.5-33.9-11.2a6.52,6.52,0,0,0-5.1-.9c-3.3.9-30.3.8-42.4,0-7.6-.6-8.8-.4-8.8.9,0,2.4,2.9,2.9,24.9,3.8,27.4,1.1,32.1,1.8,48.8,7.2,17.9,5.8,28.9,7.5,38,5.8,7.9-1.4,11.2-3,17.5-8.2,2.6-2.2,5.3-3.9,6-3.9a3.64,3.64,0,0,0,2.3-.9c.6-.5,4.3-1.6,8.4-2.5a48.8,48.8,0,0,0,12-4.4c10.3-6.4,24-12.5,29-13,2.8-.2,5.1-.8,5.1-1.3s1.3-.9,2.9-.9,3.3-.5,3.6-1a1.1,1.1,0,0,1,1.5-.5,1,1,0,0,0,1.4-.4c.3-.5,5.1.6,10.7,2.5,12.4,4.2,22.6,5.8,29.4,4.5,2.8-.5,10.2-1.3,16.5-1.6a179.78,179.78,0,0,0,21-2.6c5.2-1,12.7-2.1,16.5-2.5a71.25,71.25,0,0,0,12-2c2.8-.8,10.2-1.7,16.5-1.9,17.8-.8,20.1-1.2,38.2-7,9.2-3,19.2-5.7,22.1-6.1s9.5-1.5,14.9-2.5a109.62,109.62,0,0,1,13.7-1.9h4.1"/><path fill="#fff" d="M1341.5,147.64c-4.2-1.5-8.9-5.1-16.3-12.5-3.5-3.5-7.7-7-9.5-7.9l-3.1-1.7,4.2-3.9c3.8-3.5,4.6-3.8,8-3.3,25.3,4.1,36.9,7.7,45.5,14.1,4.6,3.3,4.8,3.7,3.4,5.7-2,3.2-14.7,8.2-16.9,6.8-1.5-.9-1.8-.8-1.8.8C1355,148.64,1347.5,149.74,1341.5,147.64Z"/><path fill="#fff" d="M1409.8,146.44c-5.1-1.2-20.6-6.4-21.7-7.2-.2-.2,2.2-4.3,5.4-9.1,6.4-9.6,14.6-18.7,20.3-22.6,3.4-2.3,4.2-2.4,10-1.6a116.93,116.93,0,0,1,15.7,4c7.9,2.6,9.4,3.5,10,5.6s1,2.4,3.5,1.8,3-.4,3,1.5c0,1.7.4,2,1.8,1.5,8.6-3.6,15.6-4.4,40.2-4.6,16.6-.1,17.8,0,23.9,2.5,7,2.8,13.4,7.2,12.6,8.6-1.5,2.5-14.8,5.2-31.5,6.5a252.48,252.48,0,0,0-29,3.8c-6.3,1.4-18,3.5-26,4.8s-16.3,2.8-18.4,3.6A37.87,37.87,0,0,1,1409.8,146.44Z"/><path fill="#fff" d="M249,138.84c-2.6-.4-3.6-1.1-4-3-.5-2.2-.7-2.3-1.6-.8s-1.6,1.5-8.7-1.4c-6-2.4-7.9-3.6-8.3-5.5-.8-3,.4-4.3,6.5-7.7,7.3-3.9,15-6.4,28.9-9.1,16.1-3.3,17.1-3.2,21,.8,1.8,1.8,3.2,3.6,3.2,4s-1.2,1.3-2.7,2.1-5.7,4.4-9.3,8.1C263.7,136.84,257.2,140.14,249,138.84Z"/><path fill="#fff" d="M166.8,135.34c-4.7-1.3-13.5-3.1-19.5-4s-16.9-2.9-24.3-4.5a162.55,162.55,0,0,0-25.6-3.4,150.89,150.89,0,0,1-17.5-1.7c-6.5-1.2-14.9-4.1-14.9-4.9,0-1.1,5.8-4.9,11.7-7.7l5.8-2.7H113c22.6-.1,31.1-.4,32.7-1.4,4.2-2.4,24.8-8.3,31-8.9,5.2-.5,6.7-.2,9.7,1.6,4.8,3,13.4,12.6,20.2,22.8,4.6,6.8,5.4,8.7,4.3,9.4a117.25,117.25,0,0,1-12.1,4.4C185.9,138.54,179.6,138.74,166.8,135.34Z"/></svg>
    <Link className={classes.Link} to="/">
      <svg className={classes.Title} preserveAspectRatio="xMidYMid" width="100%" viewBox="-300 -25 1000 200"><path fill="#404040" stroke="none" fill-rule="evenodd" d="M37.145 47.510 C 31.951 49.364,29.081 54.073,30.818 57.891 C 31.431 59.240,31.837 59.596,33.016 59.819 L 33.902 59.986 34.029 57.523 C 34.248 53.271,35.995 50.474,38.617 50.179 C 40.692 49.945,41.402 48.127,26.671 80.748 C 24.336 85.919,24.331 85.953,25.999 85.504 C 28.650 84.790,29.938 82.335,38.510 61.649 C 39.653 58.889,40.644 56.686,40.712 56.753 C 40.780 56.821,40.675 60.481,40.480 64.886 C 39.838 79.358,40.114 81.387,42.723 81.387 L 43.913 81.387 45.259 77.849 C 48.080 70.432,55.148 55.609,53.965 59.590 C 53.872 59.901,53.353 62.067,52.811 64.402 C 49.470 78.808,49.843 84.849,54.116 85.524 C 55.974 85.818,55.935 85.878,55.331 83.647 C 54.105 79.115,57.820 57.258,61.281 48.648 C 61.527 48.037,59.804 47.435,58.577 47.705 C 56.889 48.075,49.644 59.792,45.854 68.277 C 45.320 69.475,44.841 70.413,44.790 70.362 C 44.739 70.311,44.857 67.321,45.052 63.718 C 45.826 49.417,43.746 45.154,37.145 47.510 M182.663 47.603 C 178.815 49.469,173.613 58.491,168.568 72.045 C 167.367 75.273,166.398 76.764,164.415 78.436 C 162.671 79.907,162.613 79.832,163.497 77.259 C 165.337 71.906,165.939 68.258,165.023 68.018 C 164.619 67.913,164.499 67.726,164.630 67.408 C 165.079 66.323,165.047 66.000,164.415 65.265 C 161.249 61.585,151.117 67.659,149.315 74.317 C 148.493 77.353,144.904 81.125,144.078 79.820 C 143.643 79.132,143.762 78.425,144.830 75.332 C 147.679 67.080,142.009 63.795,135.653 70.016 L 133.869 71.762 134.058 70.308 C 134.598 66.155,129.905 66.822,129.201 70.999 C 128.467 75.356,125.001 79.840,122.378 79.826 C 119.750 79.811,120.161 76.592,123.577 70.455 C 125.623 66.779,125.846 65.693,124.710 64.949 C 122.702 63.633,119.965 66.698,117.645 72.860 C 116.171 76.777,112.769 80.734,111.533 79.970 C 111.024 79.656,111.241 77.692,111.987 75.856 C 115.345 67.593,109.304 63.651,102.978 69.977 L 101.176 71.779 101.292 70.181 C 101.540 66.749,97.139 66.689,96.668 70.118 C 96.239 73.235,95.057 75.556,92.673 77.963 C 88.888 81.786,87.276 80.211,89.880 75.236 C 91.190 72.731,91.383 71.964,90.840 71.420 C 90.611 71.191,90.676 71.027,91.084 70.808 C 92.483 70.060,92.476 67.273,91.072 65.927 C 87.115 62.133,79.600 66.033,75.273 74.127 C 71.598 81.001,63.511 83.544,63.350 77.875 C 63.318 76.744,63.483 76.605,65.360 76.194 C 72.538 74.619,77.790 66.916,73.517 64.232 C 68.717 61.217,59.145 70.116,59.098 77.638 C 59.057 84.110,67.274 85.785,73.060 80.485 L 73.791 79.815 74.115 80.896 C 75.189 84.481,79.095 84.696,82.656 81.364 C 83.442 80.629,84.119 80.079,84.161 80.141 C 84.203 80.204,84.424 80.626,84.652 81.079 C 85.820 83.400,89.283 83.523,92.597 81.363 C 93.301 80.904,93.370 80.910,94.164 81.497 C 95.934 82.806,96.833 82.633,97.927 80.772 C 104.175 70.143,109.904 67.290,107.561 75.973 C 105.886 82.182,110.591 84.938,115.420 80.575 L 116.536 79.567 117.005 80.550 C 118.085 82.816,121.354 83.380,124.428 81.829 C 126.059 81.007,126.085 81.003,126.813 81.522 C 127.218 81.810,128.002 82.131,128.555 82.235 L 129.560 82.423 131.471 79.341 C 137.408 69.764,142.396 67.804,140.274 75.882 C 139.439 79.063,139.425 79.317,140.024 80.578 C 141.234 83.129,145.508 83.039,148.330 80.403 C 149.306 79.491,149.335 79.497,150.035 80.713 C 151.188 82.717,154.593 82.369,157.551 79.945 C 158.976 78.777,159.047 78.896,158.229 81.083 C 157.661 82.599,157.581 82.674,155.136 83.963 C 149.424 86.975,146.999 90.992,149.427 93.419 C 152.367 96.359,156.169 93.795,159.835 86.401 C 161.317 83.413,161.523 83.140,163.017 82.194 C 163.895 81.638,164.920 80.911,165.293 80.577 L 165.972 79.972 165.788 80.679 C 163.327 90.139,164.153 95.152,168.052 94.420 C 171.051 93.857,174.309 87.487,175.103 80.635 L 175.289 79.034 176.241 79.432 C 177.639 80.016,178.939 79.920,180.440 79.122 C 182.044 78.269,182.024 78.271,182.024 78.992 C 182.024 83.005,186.856 84.159,189.880 80.869 C 190.541 80.149,191.083 79.697,191.083 79.864 C 191.083 83.731,196.643 83.913,200.725 80.179 L 202.300 78.738 202.616 79.921 C 203.688 83.921,208.700 83.944,212.246 79.966 C 213.487 78.574,215.994 74.364,215.994 73.674 C 215.994 73.386,214.357 72.582,214.187 72.786 C 214.136 72.846,213.600 73.850,212.995 75.018 C 210.010 80.775,206.643 81.876,206.659 77.089 C 206.670 73.996,206.969 73.205,208.867 71.249 C 217.245 62.617,222.474 47.663,217.331 47.046 C 214.461 46.702,206.431 60.757,203.275 71.648 C 202.125 75.616,199.842 78.677,197.144 79.871 C 194.522 81.030,194.426 79.243,196.789 73.238 C 198.478 68.944,198.360 68.330,195.752 67.854 C 194.910 67.701,194.884 67.735,192.843 71.712 C 188.609 79.967,186.257 81.999,186.044 77.586 C 185.943 75.492,186.467 73.508,187.972 70.283 L 189.058 67.954 188.209 67.240 C 186.374 65.696,185.108 66.736,183.329 71.250 C 180.178 79.245,174.973 79.177,174.945 71.140 C 174.944 70.859,174.753 70.265,174.521 69.819 C 173.895 68.620,173.996 68.078,175.018 67.155 C 178.388 64.111,179.148 63.393,180.436 62.038 C 187.825 54.269,189.354 44.358,182.663 47.603 M236.615 47.387 C 230.256 49.659,226.240 57.797,230.583 59.612 C 232.644 60.473,232.838 60.307,232.838 57.679 C 232.838 54.392,235.060 50.106,236.764 50.106 C 237.600 50.106,237.292 51.349,232.715 66.478 C 227.806 82.704,226.986 85.538,227.152 85.703 C 227.212 85.763,227.786 85.671,228.429 85.498 C 230.984 84.810,232.356 81.404,237.523 62.919 C 238.360 59.924,239.123 57.568,239.217 57.682 C 239.312 57.797,240.066 62.477,240.892 68.082 C 243.359 84.810,243.499 85.220,246.851 85.539 L 247.841 85.633 248.017 83.369 C 248.493 77.208,253.771 56.272,256.756 48.698 C 257.461 46.908,257.469 46.992,256.603 46.992 C 255.567 46.992,254.347 47.699,253.549 48.761 C 252.524 50.124,249.109 61.182,246.856 70.430 C 246.503 71.877,246.169 73.015,246.114 72.959 C 246.058 72.904,245.560 69.172,245.007 64.667 C 243.018 48.462,241.626 45.597,236.615 47.387 M183.723 51.814 C 183.723 53.101,177.540 62.136,177.017 61.613 C 176.599 61.194,181.798 52.414,182.816 51.820 C 183.443 51.454,183.723 51.452,183.723 51.814 M216.126 54.705 C 215.157 57.701,209.421 67.972,208.969 67.520 C 208.606 67.158,212.309 59.395,214.817 55.262 C 216.515 52.461,216.905 52.295,216.126 54.705 M126.675 56.592 C 123.653 57.336,122.793 60.215,125.243 61.392 C 126.324 61.912,128.057 61.400,129.141 60.240 C 130.973 58.278,129.382 55.925,126.675 56.592 M299.507 62.799 C 298.940 63.366,298.646 64.012,298.508 64.993 C 298.177 67.352,294.596 72.914,293.585 72.640 C 292.990 72.479,291.618 74.143,291.095 75.663 C 290.260 78.085,287.144 80.886,286.470 79.820 C 286.035 79.132,286.154 78.425,287.222 75.332 C 290.071 67.080,284.401 63.795,278.045 70.016 L 276.261 71.762 276.450 70.308 C 276.615 69.038,276.559 68.774,276.008 68.223 C 274.760 66.975,271.762 68.168,271.762 69.912 C 271.762 73.377,269.705 76.150,267.135 76.150 L 266.161 76.150 267.111 74.239 C 269.503 69.431,269.409 65.686,266.865 64.443 C 264.323 63.201,260.880 65.058,260.251 68.011 C 260.106 68.692,259.952 68.790,259.030 68.790 C 254.504 68.790,250.996 79.126,254.471 82.224 C 256.311 83.864,260.116 82.885,263.023 80.024 C 264.437 78.632,264.448 78.627,266.474 78.568 C 267.592 78.535,268.729 78.410,269.000 78.290 C 269.460 78.087,269.465 78.141,269.071 79.084 C 268.276 80.987,268.782 81.829,270.967 82.239 L 271.952 82.423 273.863 79.341 C 279.800 69.764,284.788 67.804,282.666 75.882 C 281.831 79.063,281.817 79.317,282.416 80.578 C 283.571 83.011,287.314 83.072,290.423 80.709 C 291.057 80.227,291.429 80.090,291.503 80.313 C 292.900 84.504,300.207 85.203,302.955 81.409 C 303.533 80.612,304.311 80.020,305.481 79.489 L 307.171 78.722 307.443 79.436 C 307.592 79.829,307.714 80.225,307.714 80.317 C 307.714 80.409,308.051 80.926,308.462 81.465 C 310.522 84.166,315.242 84.316,319.393 81.812 L 321.291 80.668 321.874 81.251 C 322.514 81.891,323.603 82.378,324.394 82.378 C 324.735 82.378,325.477 81.425,326.653 79.476 C 332.317 70.094,337.608 67.719,335.645 75.441 C 335.230 77.072,334.890 78.733,334.890 79.132 C 334.890 82.731,340.089 83.649,343.288 80.615 L 344.184 79.766 344.667 80.718 C 346.683 84.695,353.220 85.098,355.893 81.409 C 356.466 80.617,357.248 80.021,358.392 79.501 L 360.057 78.746 360.378 79.720 C 362.607 86.474,373.682 83.933,377.998 75.677 L 379.059 73.646 378.261 73.078 L 377.462 72.509 376.506 74.117 C 372.347 81.112,364.331 83.492,364.331 77.732 C 364.331 76.800,364.406 76.719,365.534 76.428 C 369.182 75.489,371.496 74.314,373.448 72.414 C 376.030 69.899,376.748 66.591,375.111 64.760 C 371.968 61.246,362.945 67.082,360.748 74.050 C 359.726 77.293,357.254 78.597,357.254 75.893 C 357.254 74.780,356.864 72.862,356.089 70.160 C 355.108 66.741,354.950 65.846,355.092 64.487 C 355.472 60.850,351.959 61.337,351.445 64.993 C 351.113 67.358,347.529 72.921,346.522 72.634 C 345.982 72.480,344.308 74.454,344.051 75.548 C 343.595 77.482,340.620 80.339,339.505 79.911 C 338.913 79.684,339.078 77.977,339.876 76.074 C 343.332 67.826,337.551 63.710,331.140 69.855 L 329.149 71.762 329.311 70.504 C 329.862 66.215,325.224 66.608,324.497 70.912 C 323.199 78.593,312.607 84.757,311.542 78.450 C 311.320 77.136,311.675 76.433,312.560 76.433 C 316.990 76.433,323.001 71.178,323.001 67.305 C 323.001 59.548,310.960 65.071,307.827 74.264 C 307.373 75.598,305.533 77.565,304.741 77.565 C 304.412 77.565,304.317 77.189,304.317 75.893 C 304.317 74.780,303.927 72.862,303.152 70.160 C 302.171 66.741,302.013 65.846,302.155 64.487 C 302.416 61.989,301.134 61.172,299.507 62.799 M71.621 66.959 C 71.621 68.544,68.842 71.595,65.996 73.135 C 64.101 74.161,63.987 74.010,65.133 71.991 C 67.107 68.511,71.621 65.010,71.621 66.959 M266.100 68.428 C 266.100 69.516,265.141 72.561,264.471 73.599 L 264.017 74.304 263.656 73.458 C 263.153 72.279,263.175 69.228,263.693 68.227 C 264.740 66.201,266.100 66.315,266.100 68.428 M319.711 67.304 C 319.241 69.262,317.007 71.636,314.190 73.169 C 312.411 74.138,312.305 74.021,313.255 72.144 C 315.017 68.665,320.342 64.672,319.711 67.304 M372.541 67.119 C 372.541 68.814,370.583 71.033,367.488 72.847 C 364.881 74.375,364.811 74.146,366.904 70.958 C 369.103 67.608,372.541 65.267,372.541 67.119 M88.448 67.720 C 89.293 68.927,89.002 69.692,86.310 73.330 C 81.197 80.240,78.415 82.267,78.415 79.079 C 78.415 73.516,86.275 64.618,88.448 67.720 M162.907 67.643 C 162.998 67.791,162.840 68.037,162.554 68.190 C 161.897 68.542,161.220 69.891,160.649 71.988 C 159.862 74.881,154.755 79.568,153.624 78.436 C 152.525 77.337,154.102 72.845,156.503 70.236 C 158.526 68.038,162.225 66.540,162.907 67.643 M299.480 71.691 C 299.954 73.672,300.227 77.849,299.883 77.849 C 298.994 77.849,295.824 75.171,295.824 74.420 C 295.824 74.132,298.729 70.243,298.961 70.221 C 299.051 70.212,299.284 70.874,299.480 71.691 M352.417 71.691 C 352.891 73.672,353.164 77.849,352.820 77.849 C 351.931 77.849,348.762 75.171,348.762 74.420 C 348.762 74.132,351.666 70.243,351.898 70.221 C 351.988 70.212,352.221 70.874,352.417 71.691 M261.098 75.159 C 261.362 75.626,261.736 76.237,261.929 76.517 C 262.667 77.590,258.780 80.403,257.746 79.544 C 256.874 78.821,257.598 74.933,259.172 71.890 L 259.675 70.918 260.146 72.614 C 260.405 73.547,260.834 74.692,261.098 75.159 M172.530 78.698 C 172.517 82.075,171.637 85.677,170.040 88.889 C 167.466 94.064,168.140 86.997,171.172 77.021 C 172.117 73.913,172.545 74.442,172.530 78.698 M297.911 79.216 C 299.348 79.933,299.502 80.226,298.674 80.669 C 296.701 81.726,294.409 79.989,294.409 77.438 L 294.409 76.434 295.505 77.498 C 296.108 78.083,297.191 78.856,297.911 79.216 M350.848 79.216 C 352.285 79.933,352.439 80.226,351.611 80.669 C 349.638 81.726,347.346 79.989,347.346 77.438 L 347.346 76.434 348.442 77.498 C 349.045 78.083,350.128 78.856,350.848 79.216 M155.461 87.529 C 153.751 90.491,151.755 92.354,151.369 91.348 C 150.904 90.136,151.907 88.710,154.419 87.012 C 156.315 85.731,156.458 85.802,155.461 87.529 "></path></svg>
      <svg className={classes.TitleMobile} preserveAspectRatio="xMidYMid" width="100%" viewBox="-70 0 550 200"><path fill="#404040" stroke="none" fill-rule="evenodd" d="M37.145 47.510 C 31.951 49.364,29.081 54.073,30.818 57.891 C 31.431 59.240,31.837 59.596,33.016 59.819 L 33.902 59.986 34.029 57.523 C 34.248 53.271,35.995 50.474,38.617 50.179 C 40.692 49.945,41.402 48.127,26.671 80.748 C 24.336 85.919,24.331 85.953,25.999 85.504 C 28.650 84.790,29.938 82.335,38.510 61.649 C 39.653 58.889,40.644 56.686,40.712 56.753 C 40.780 56.821,40.675 60.481,40.480 64.886 C 39.838 79.358,40.114 81.387,42.723 81.387 L 43.913 81.387 45.259 77.849 C 48.080 70.432,55.148 55.609,53.965 59.590 C 53.872 59.901,53.353 62.067,52.811 64.402 C 49.470 78.808,49.843 84.849,54.116 85.524 C 55.974 85.818,55.935 85.878,55.331 83.647 C 54.105 79.115,57.820 57.258,61.281 48.648 C 61.527 48.037,59.804 47.435,58.577 47.705 C 56.889 48.075,49.644 59.792,45.854 68.277 C 45.320 69.475,44.841 70.413,44.790 70.362 C 44.739 70.311,44.857 67.321,45.052 63.718 C 45.826 49.417,43.746 45.154,37.145 47.510 M182.663 47.603 C 178.815 49.469,173.613 58.491,168.568 72.045 C 167.367 75.273,166.398 76.764,164.415 78.436 C 162.671 79.907,162.613 79.832,163.497 77.259 C 165.337 71.906,165.939 68.258,165.023 68.018 C 164.619 67.913,164.499 67.726,164.630 67.408 C 165.079 66.323,165.047 66.000,164.415 65.265 C 161.249 61.585,151.117 67.659,149.315 74.317 C 148.493 77.353,144.904 81.125,144.078 79.820 C 143.643 79.132,143.762 78.425,144.830 75.332 C 147.679 67.080,142.009 63.795,135.653 70.016 L 133.869 71.762 134.058 70.308 C 134.598 66.155,129.905 66.822,129.201 70.999 C 128.467 75.356,125.001 79.840,122.378 79.826 C 119.750 79.811,120.161 76.592,123.577 70.455 C 125.623 66.779,125.846 65.693,124.710 64.949 C 122.702 63.633,119.965 66.698,117.645 72.860 C 116.171 76.777,112.769 80.734,111.533 79.970 C 111.024 79.656,111.241 77.692,111.987 75.856 C 115.345 67.593,109.304 63.651,102.978 69.977 L 101.176 71.779 101.292 70.181 C 101.540 66.749,97.139 66.689,96.668 70.118 C 96.239 73.235,95.057 75.556,92.673 77.963 C 88.888 81.786,87.276 80.211,89.880 75.236 C 91.190 72.731,91.383 71.964,90.840 71.420 C 90.611 71.191,90.676 71.027,91.084 70.808 C 92.483 70.060,92.476 67.273,91.072 65.927 C 87.115 62.133,79.600 66.033,75.273 74.127 C 71.598 81.001,63.511 83.544,63.350 77.875 C 63.318 76.744,63.483 76.605,65.360 76.194 C 72.538 74.619,77.790 66.916,73.517 64.232 C 68.717 61.217,59.145 70.116,59.098 77.638 C 59.057 84.110,67.274 85.785,73.060 80.485 L 73.791 79.815 74.115 80.896 C 75.189 84.481,79.095 84.696,82.656 81.364 C 83.442 80.629,84.119 80.079,84.161 80.141 C 84.203 80.204,84.424 80.626,84.652 81.079 C 85.820 83.400,89.283 83.523,92.597 81.363 C 93.301 80.904,93.370 80.910,94.164 81.497 C 95.934 82.806,96.833 82.633,97.927 80.772 C 104.175 70.143,109.904 67.290,107.561 75.973 C 105.886 82.182,110.591 84.938,115.420 80.575 L 116.536 79.567 117.005 80.550 C 118.085 82.816,121.354 83.380,124.428 81.829 C 126.059 81.007,126.085 81.003,126.813 81.522 C 127.218 81.810,128.002 82.131,128.555 82.235 L 129.560 82.423 131.471 79.341 C 137.408 69.764,142.396 67.804,140.274 75.882 C 139.439 79.063,139.425 79.317,140.024 80.578 C 141.234 83.129,145.508 83.039,148.330 80.403 C 149.306 79.491,149.335 79.497,150.035 80.713 C 151.188 82.717,154.593 82.369,157.551 79.945 C 158.976 78.777,159.047 78.896,158.229 81.083 C 157.661 82.599,157.581 82.674,155.136 83.963 C 149.424 86.975,146.999 90.992,149.427 93.419 C 152.367 96.359,156.169 93.795,159.835 86.401 C 161.317 83.413,161.523 83.140,163.017 82.194 C 163.895 81.638,164.920 80.911,165.293 80.577 L 165.972 79.972 165.788 80.679 C 163.327 90.139,164.153 95.152,168.052 94.420 C 171.051 93.857,174.309 87.487,175.103 80.635 L 175.289 79.034 176.241 79.432 C 177.639 80.016,178.939 79.920,180.440 79.122 C 182.044 78.269,182.024 78.271,182.024 78.992 C 182.024 83.005,186.856 84.159,189.880 80.869 C 190.541 80.149,191.083 79.697,191.083 79.864 C 191.083 83.731,196.643 83.913,200.725 80.179 L 202.300 78.738 202.616 79.921 C 203.688 83.921,208.700 83.944,212.246 79.966 C 213.487 78.574,215.994 74.364,215.994 73.674 C 215.994 73.386,214.357 72.582,214.187 72.786 C 214.136 72.846,213.600 73.850,212.995 75.018 C 210.010 80.775,206.643 81.876,206.659 77.089 C 206.670 73.996,206.969 73.205,208.867 71.249 C 217.245 62.617,222.474 47.663,217.331 47.046 C 214.461 46.702,206.431 60.757,203.275 71.648 C 202.125 75.616,199.842 78.677,197.144 79.871 C 194.522 81.030,194.426 79.243,196.789 73.238 C 198.478 68.944,198.360 68.330,195.752 67.854 C 194.910 67.701,194.884 67.735,192.843 71.712 C 188.609 79.967,186.257 81.999,186.044 77.586 C 185.943 75.492,186.467 73.508,187.972 70.283 L 189.058 67.954 188.209 67.240 C 186.374 65.696,185.108 66.736,183.329 71.250 C 180.178 79.245,174.973 79.177,174.945 71.140 C 174.944 70.859,174.753 70.265,174.521 69.819 C 173.895 68.620,173.996 68.078,175.018 67.155 C 178.388 64.111,179.148 63.393,180.436 62.038 C 187.825 54.269,189.354 44.358,182.663 47.603 M236.615 47.387 C 230.256 49.659,226.240 57.797,230.583 59.612 C 232.644 60.473,232.838 60.307,232.838 57.679 C 232.838 54.392,235.060 50.106,236.764 50.106 C 237.600 50.106,237.292 51.349,232.715 66.478 C 227.806 82.704,226.986 85.538,227.152 85.703 C 227.212 85.763,227.786 85.671,228.429 85.498 C 230.984 84.810,232.356 81.404,237.523 62.919 C 238.360 59.924,239.123 57.568,239.217 57.682 C 239.312 57.797,240.066 62.477,240.892 68.082 C 243.359 84.810,243.499 85.220,246.851 85.539 L 247.841 85.633 248.017 83.369 C 248.493 77.208,253.771 56.272,256.756 48.698 C 257.461 46.908,257.469 46.992,256.603 46.992 C 255.567 46.992,254.347 47.699,253.549 48.761 C 252.524 50.124,249.109 61.182,246.856 70.430 C 246.503 71.877,246.169 73.015,246.114 72.959 C 246.058 72.904,245.560 69.172,245.007 64.667 C 243.018 48.462,241.626 45.597,236.615 47.387 M183.723 51.814 C 183.723 53.101,177.540 62.136,177.017 61.613 C 176.599 61.194,181.798 52.414,182.816 51.820 C 183.443 51.454,183.723 51.452,183.723 51.814 M216.126 54.705 C 215.157 57.701,209.421 67.972,208.969 67.520 C 208.606 67.158,212.309 59.395,214.817 55.262 C 216.515 52.461,216.905 52.295,216.126 54.705 M126.675 56.592 C 123.653 57.336,122.793 60.215,125.243 61.392 C 126.324 61.912,128.057 61.400,129.141 60.240 C 130.973 58.278,129.382 55.925,126.675 56.592 M299.507 62.799 C 298.940 63.366,298.646 64.012,298.508 64.993 C 298.177 67.352,294.596 72.914,293.585 72.640 C 292.990 72.479,291.618 74.143,291.095 75.663 C 290.260 78.085,287.144 80.886,286.470 79.820 C 286.035 79.132,286.154 78.425,287.222 75.332 C 290.071 67.080,284.401 63.795,278.045 70.016 L 276.261 71.762 276.450 70.308 C 276.615 69.038,276.559 68.774,276.008 68.223 C 274.760 66.975,271.762 68.168,271.762 69.912 C 271.762 73.377,269.705 76.150,267.135 76.150 L 266.161 76.150 267.111 74.239 C 269.503 69.431,269.409 65.686,266.865 64.443 C 264.323 63.201,260.880 65.058,260.251 68.011 C 260.106 68.692,259.952 68.790,259.030 68.790 C 254.504 68.790,250.996 79.126,254.471 82.224 C 256.311 83.864,260.116 82.885,263.023 80.024 C 264.437 78.632,264.448 78.627,266.474 78.568 C 267.592 78.535,268.729 78.410,269.000 78.290 C 269.460 78.087,269.465 78.141,269.071 79.084 C 268.276 80.987,268.782 81.829,270.967 82.239 L 271.952 82.423 273.863 79.341 C 279.800 69.764,284.788 67.804,282.666 75.882 C 281.831 79.063,281.817 79.317,282.416 80.578 C 283.571 83.011,287.314 83.072,290.423 80.709 C 291.057 80.227,291.429 80.090,291.503 80.313 C 292.900 84.504,300.207 85.203,302.955 81.409 C 303.533 80.612,304.311 80.020,305.481 79.489 L 307.171 78.722 307.443 79.436 C 307.592 79.829,307.714 80.225,307.714 80.317 C 307.714 80.409,308.051 80.926,308.462 81.465 C 310.522 84.166,315.242 84.316,319.393 81.812 L 321.291 80.668 321.874 81.251 C 322.514 81.891,323.603 82.378,324.394 82.378 C 324.735 82.378,325.477 81.425,326.653 79.476 C 332.317 70.094,337.608 67.719,335.645 75.441 C 335.230 77.072,334.890 78.733,334.890 79.132 C 334.890 82.731,340.089 83.649,343.288 80.615 L 344.184 79.766 344.667 80.718 C 346.683 84.695,353.220 85.098,355.893 81.409 C 356.466 80.617,357.248 80.021,358.392 79.501 L 360.057 78.746 360.378 79.720 C 362.607 86.474,373.682 83.933,377.998 75.677 L 379.059 73.646 378.261 73.078 L 377.462 72.509 376.506 74.117 C 372.347 81.112,364.331 83.492,364.331 77.732 C 364.331 76.800,364.406 76.719,365.534 76.428 C 369.182 75.489,371.496 74.314,373.448 72.414 C 376.030 69.899,376.748 66.591,375.111 64.760 C 371.968 61.246,362.945 67.082,360.748 74.050 C 359.726 77.293,357.254 78.597,357.254 75.893 C 357.254 74.780,356.864 72.862,356.089 70.160 C 355.108 66.741,354.950 65.846,355.092 64.487 C 355.472 60.850,351.959 61.337,351.445 64.993 C 351.113 67.358,347.529 72.921,346.522 72.634 C 345.982 72.480,344.308 74.454,344.051 75.548 C 343.595 77.482,340.620 80.339,339.505 79.911 C 338.913 79.684,339.078 77.977,339.876 76.074 C 343.332 67.826,337.551 63.710,331.140 69.855 L 329.149 71.762 329.311 70.504 C 329.862 66.215,325.224 66.608,324.497 70.912 C 323.199 78.593,312.607 84.757,311.542 78.450 C 311.320 77.136,311.675 76.433,312.560 76.433 C 316.990 76.433,323.001 71.178,323.001 67.305 C 323.001 59.548,310.960 65.071,307.827 74.264 C 307.373 75.598,305.533 77.565,304.741 77.565 C 304.412 77.565,304.317 77.189,304.317 75.893 C 304.317 74.780,303.927 72.862,303.152 70.160 C 302.171 66.741,302.013 65.846,302.155 64.487 C 302.416 61.989,301.134 61.172,299.507 62.799 M71.621 66.959 C 71.621 68.544,68.842 71.595,65.996 73.135 C 64.101 74.161,63.987 74.010,65.133 71.991 C 67.107 68.511,71.621 65.010,71.621 66.959 M266.100 68.428 C 266.100 69.516,265.141 72.561,264.471 73.599 L 264.017 74.304 263.656 73.458 C 263.153 72.279,263.175 69.228,263.693 68.227 C 264.740 66.201,266.100 66.315,266.100 68.428 M319.711 67.304 C 319.241 69.262,317.007 71.636,314.190 73.169 C 312.411 74.138,312.305 74.021,313.255 72.144 C 315.017 68.665,320.342 64.672,319.711 67.304 M372.541 67.119 C 372.541 68.814,370.583 71.033,367.488 72.847 C 364.881 74.375,364.811 74.146,366.904 70.958 C 369.103 67.608,372.541 65.267,372.541 67.119 M88.448 67.720 C 89.293 68.927,89.002 69.692,86.310 73.330 C 81.197 80.240,78.415 82.267,78.415 79.079 C 78.415 73.516,86.275 64.618,88.448 67.720 M162.907 67.643 C 162.998 67.791,162.840 68.037,162.554 68.190 C 161.897 68.542,161.220 69.891,160.649 71.988 C 159.862 74.881,154.755 79.568,153.624 78.436 C 152.525 77.337,154.102 72.845,156.503 70.236 C 158.526 68.038,162.225 66.540,162.907 67.643 M299.480 71.691 C 299.954 73.672,300.227 77.849,299.883 77.849 C 298.994 77.849,295.824 75.171,295.824 74.420 C 295.824 74.132,298.729 70.243,298.961 70.221 C 299.051 70.212,299.284 70.874,299.480 71.691 M352.417 71.691 C 352.891 73.672,353.164 77.849,352.820 77.849 C 351.931 77.849,348.762 75.171,348.762 74.420 C 348.762 74.132,351.666 70.243,351.898 70.221 C 351.988 70.212,352.221 70.874,352.417 71.691 M261.098 75.159 C 261.362 75.626,261.736 76.237,261.929 76.517 C 262.667 77.590,258.780 80.403,257.746 79.544 C 256.874 78.821,257.598 74.933,259.172 71.890 L 259.675 70.918 260.146 72.614 C 260.405 73.547,260.834 74.692,261.098 75.159 M172.530 78.698 C 172.517 82.075,171.637 85.677,170.040 88.889 C 167.466 94.064,168.140 86.997,171.172 77.021 C 172.117 73.913,172.545 74.442,172.530 78.698 M297.911 79.216 C 299.348 79.933,299.502 80.226,298.674 80.669 C 296.701 81.726,294.409 79.989,294.409 77.438 L 294.409 76.434 295.505 77.498 C 296.108 78.083,297.191 78.856,297.911 79.216 M350.848 79.216 C 352.285 79.933,352.439 80.226,351.611 80.669 C 349.638 81.726,347.346 79.989,347.346 77.438 L 347.346 76.434 348.442 77.498 C 349.045 78.083,350.128 78.856,350.848 79.216 M155.461 87.529 C 153.751 90.491,151.755 92.354,151.369 91.348 C 150.904 90.136,151.907 88.710,154.419 87.012 C 156.315 85.731,156.458 85.802,155.461 87.529 "></path></svg>
    </Link>
  </header>
);

export default Header;
