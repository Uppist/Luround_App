/** @format */
import { useState } from "react";
import One from "./OneOff";

import nigeria from "../../elements/nigeria.png";
import Time from "./Time";
import BookingPeriod from "./BookingPeriod";

export default function Projectbased() {
  const [isBack, setIsBack] = useState(false);

  function BackOneOff() {
    setIsBack(true);
  }

  const [isCancel, setIsCancel] = useState(false);
  function Cancel() {
    setIsCancel(true);
  }

  function Done() {
    setIsCancel(true);
  }
  return (
    <>
      {isCancel ? (
        <One />
      ) : isBack ? (
        <One />
      ) : (
        <div className='project-based-container'>
          <button className='project-based-back' onClick={BackOneOff}>
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1L1 6L6 11'
                stroke='currentColor'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Back</span>
          </button>

          <div className='project-based-grid-container'>
            <div className='create-project-based'>
              <div className='create-project-service'>
                <span>Create One-off service </span>
                <svg
                  width='123'
                  height='24'
                  viewBox='0 0 123 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='123' height='24' rx='12' fill='#F2FDFD' />
                  <rect
                    x='8'
                    y='4'
                    width='16'
                    height='16'
                    rx='8'
                    fill='#D8FDFD'
                  />
                  <circle cx='16' cy='12' r='4' fill='#00CCCC' />
                  <path
                    d='M29.2333 17V7.54545H32.4279C33.1696 7.54545 33.7759 7.67933 34.2468 7.94709C34.7207 8.21177 35.0716 8.57031 35.2993 9.02273C35.5271 9.47514 35.6409 9.97988 35.6409 10.5369C35.6409 11.094 35.5271 11.6003 35.2993 12.0558C35.0746 12.5112 34.7269 12.8744 34.256 13.1452C33.7851 13.413 33.1819 13.5469 32.4463 13.5469H30.1566V12.5312H32.4094C32.9172 12.5312 33.325 12.4435 33.6328 12.2681C33.9405 12.0927 34.1637 11.8557 34.3022 11.5572C34.4437 11.2556 34.5145 10.9155 34.5145 10.5369C34.5145 10.1584 34.4437 9.81984 34.3022 9.52131C34.1637 9.22277 33.939 8.98887 33.6282 8.8196C33.3173 8.64725 32.9049 8.56108 32.3909 8.56108H30.3782V17H29.2333ZM37.3375 17V9.90909H38.39V10.9801H38.4639C38.5932 10.6293 38.8271 10.3446 39.1656 10.1261C39.5042 9.90755 39.8858 9.79829 40.3105 9.79829C40.3905 9.79829 40.4905 9.79983 40.6106 9.80291C40.7306 9.80599 40.8214 9.81061 40.8829 9.81676V10.9247C40.846 10.9155 40.7614 10.9016 40.629 10.8832C40.4998 10.8616 40.3628 10.8509 40.2182 10.8509C39.8735 10.8509 39.5657 10.9232 39.2949 11.0678C39.0271 11.2094 38.8148 11.4064 38.6578 11.6587C38.5039 11.908 38.427 12.1927 38.427 12.5128V17H37.3375ZM44.8393 17.1477C44.1991 17.1477 43.6374 16.9954 43.1543 16.6907C42.6741 16.386 42.2987 15.9598 42.0278 15.4119C41.7601 14.8641 41.6262 14.224 41.6262 13.4915C41.6262 12.7528 41.7601 12.1081 42.0278 11.5572C42.2987 11.0063 42.6741 10.5785 43.1543 10.2738C43.6374 9.96911 44.1991 9.81676 44.8393 9.81676C45.4794 9.81676 46.0396 9.96911 46.5197 10.2738C47.0029 10.5785 47.3783 11.0063 47.6461 11.5572C47.9169 12.1081 48.0523 12.7528 48.0523 13.4915C48.0523 14.224 47.9169 14.8641 47.6461 15.4119C47.3783 15.9598 47.0029 16.386 46.5197 16.6907C46.0396 16.9954 45.4794 17.1477 44.8393 17.1477ZM44.8393 16.169C45.3255 16.169 45.7256 16.0444 46.0396 15.7951C46.3535 15.5458 46.5858 15.218 46.7366 14.8118C46.8874 14.4055 46.9628 13.9654 46.9628 13.4915C46.9628 13.0175 46.8874 12.5759 46.7366 12.1665C46.5858 11.7572 46.3535 11.4264 46.0396 11.174C45.7256 10.9216 45.3255 10.7955 44.8393 10.7955C44.353 10.7955 43.9529 10.9216 43.639 11.174C43.3251 11.4264 43.0927 11.7572 42.9419 12.1665C42.7911 12.5759 42.7157 13.0175 42.7157 13.4915C42.7157 13.9654 42.7911 14.4055 42.9419 14.8118C43.0927 15.218 43.3251 15.5458 43.639 15.7951C43.9529 16.0444 44.353 16.169 44.8393 16.169ZM49.7154 9.90909H50.8049V17.517C50.8049 17.9541 50.7295 18.3326 50.5787 18.6527C50.431 18.9728 50.2063 19.2205 49.9047 19.396C49.6062 19.5714 49.2292 19.6591 48.7737 19.6591C48.7367 19.6591 48.6998 19.6591 48.6629 19.6591C48.6259 19.6591 48.589 19.6591 48.5521 19.6591V18.6435C48.589 18.6435 48.6229 18.6435 48.6536 18.6435C48.6844 18.6435 48.7183 18.6435 48.7552 18.6435C49.0876 18.6435 49.3307 18.545 49.4846 18.348C49.6385 18.1541 49.7154 17.8771 49.7154 17.517V9.90909ZM50.2509 8.72727C50.0386 8.72727 49.8555 8.65495 49.7016 8.5103C49.5508 8.36565 49.4754 8.19176 49.4754 7.98864C49.4754 7.78551 49.5508 7.61162 49.7016 7.46697C49.8555 7.32232 50.0386 7.25 50.2509 7.25C50.4633 7.25 50.6449 7.32232 50.7957 7.46697C50.9496 7.61162 51.0265 7.78551 51.0265 7.98864C51.0265 8.19176 50.9496 8.36565 50.7957 8.5103C50.6449 8.65495 50.4633 8.72727 50.2509 8.72727ZM55.7734 17.1477C55.0902 17.1477 54.5008 16.9969 54.0053 16.6953C53.5129 16.3906 53.1328 15.9659 52.865 15.4212C52.6003 14.8733 52.468 14.2363 52.468 13.5099C52.468 12.7836 52.6003 12.1435 52.865 11.5895C53.1328 11.0324 53.5052 10.5985 53.9822 10.2876C54.4623 9.97372 55.0224 9.81676 55.6626 9.81676C56.0319 9.81676 56.3966 9.87831 56.7567 10.0014C57.1168 10.1245 57.4446 10.3246 57.74 10.6016C58.0355 10.8755 58.2709 11.2386 58.4463 11.6911C58.6218 12.1435 58.7095 12.7005 58.7095 13.3622V13.8239H53.2436V12.8821H57.6015C57.6015 12.482 57.5215 12.125 57.3615 11.8111C57.2045 11.4972 56.9798 11.2494 56.6875 11.0678C56.3982 10.8862 56.0565 10.7955 55.6626 10.7955C55.2286 10.7955 54.8532 10.9032 54.5362 11.1186C54.2223 11.331 53.9807 11.608 53.8114 11.9496C53.6421 12.2912 53.5575 12.6574 53.5575 13.0483V13.6761C53.5575 14.2116 53.6498 14.6656 53.8345 15.038C54.0222 15.4073 54.2823 15.6889 54.6147 15.8828C54.947 16.0736 55.3333 16.169 55.7734 16.169C56.0596 16.169 56.3181 16.129 56.549 16.049C56.7829 15.9659 56.9844 15.8428 57.1537 15.6797C57.323 15.5135 57.4538 15.3073 57.5461 15.0611L58.5987 15.3565C58.4879 15.7135 58.3017 16.0275 58.0401 16.2983C57.7785 16.5661 57.4553 16.7753 57.0706 16.9261C56.6859 17.0739 56.2535 17.1477 55.7734 17.1477ZM63.2475 17.1477C62.5827 17.1477 62.0103 16.9908 61.5301 16.6768C61.05 16.3629 60.6807 15.9305 60.4222 15.3796C60.1637 14.8287 60.0344 14.1993 60.0344 13.4915C60.0344 12.7713 60.1667 12.1358 60.4314 11.5849C60.6992 11.0309 61.0716 10.5985 61.5486 10.2876C62.0287 9.97372 62.5889 9.81676 63.229 9.81676C63.7276 9.81676 64.1769 9.90909 64.577 10.0938C64.9771 10.2784 65.3049 10.5369 65.5603 10.8693C65.8158 11.2017 65.9743 11.5895 66.0358 12.0327H64.9463C64.8632 11.7095 64.6786 11.4233 64.3924 11.174C64.1092 10.9216 63.7276 10.7955 63.2475 10.7955C62.8228 10.7955 62.4504 10.9062 62.1303 11.1278C61.8133 11.3464 61.5655 11.6557 61.387 12.0558C61.2116 12.4528 61.1239 12.919 61.1239 13.4545C61.1239 14.0024 61.2101 14.4794 61.3824 14.8857C61.5578 15.2919 61.8041 15.6074 62.121 15.832C62.4411 16.0567 62.8166 16.169 63.2475 16.169C63.5306 16.169 63.7876 16.1198 64.0184 16.0213C64.2492 15.9228 64.4447 15.7812 64.6047 15.5966C64.7648 15.4119 64.8786 15.1903 64.9463 14.9318H66.0358C65.9743 15.3504 65.8219 15.7274 65.5788 16.0629C65.3387 16.3952 65.0202 16.6599 64.6232 16.8569C64.2292 17.0508 63.7707 17.1477 63.2475 17.1477ZM70.7123 9.90909V10.8324H67.0376V9.90909H70.7123ZM68.1086 8.21023H69.1981V14.9688C69.1981 15.2765 69.2427 15.5073 69.332 15.6612C69.4243 15.812 69.5413 15.9136 69.6828 15.9659C69.8275 16.0152 69.9798 16.0398 70.1399 16.0398C70.2599 16.0398 70.3584 16.0336 70.4353 16.0213C70.5123 16.0059 70.5738 15.9936 70.62 15.9844L70.8416 16.9631C70.7677 16.9908 70.6646 17.0185 70.5323 17.0462C70.3999 17.0769 70.2322 17.0923 70.0291 17.0923C69.7213 17.0923 69.4197 17.0262 69.1242 16.8938C68.8319 16.7615 68.5887 16.5599 68.3948 16.2891C68.204 16.0182 68.1086 15.6766 68.1086 15.2642V8.21023ZM76.1598 12.4389V13.4545H72.0234V12.4389H76.1598ZM78.2245 17V7.54545H79.314V11.0355H79.4063C79.4863 10.9124 79.5971 10.7554 79.7387 10.5646C79.8833 10.3707 80.0895 10.1984 80.3573 10.0476C80.6281 9.8937 80.9944 9.81676 81.456 9.81676C82.0531 9.81676 82.5794 9.96603 83.0348 10.2646C83.4903 10.5631 83.8458 10.9863 84.1013 11.5341C84.3567 12.0819 84.4844 12.7282 84.4844 13.473C84.4844 14.224 84.3567 14.8749 84.1013 15.4258C83.8458 15.9736 83.4919 16.3983 83.0395 16.6999C82.587 16.9985 82.0654 17.1477 81.4745 17.1477C81.019 17.1477 80.6543 17.0723 80.3804 16.9215C80.1065 16.7676 79.8956 16.5937 79.7479 16.3999C79.6002 16.2029 79.4863 16.0398 79.4063 15.9105H79.277V17H78.2245ZM79.2955 13.4545C79.2955 13.9901 79.374 14.4625 79.5309 14.8718C79.6879 15.2781 79.9172 15.5966 80.2188 15.8274C80.5204 16.0552 80.8897 16.169 81.3267 16.169C81.7822 16.169 82.1623 16.049 82.467 15.8089C82.7748 15.5658 83.0056 15.2396 83.1595 14.8303C83.3165 14.4179 83.3949 13.9593 83.3949 13.4545C83.3949 12.956 83.318 12.5066 83.1641 12.1065C83.0133 11.7034 82.784 11.3848 82.4763 11.1509C82.1716 10.9139 81.7884 10.7955 81.3267 10.7955C80.8836 10.7955 80.5112 10.9078 80.2096 11.1325C79.908 11.354 79.6802 11.6649 79.5263 12.065C79.3724 12.462 79.2955 12.9252 79.2955 13.4545ZM88.2376 17.1662C87.7883 17.1662 87.3805 17.0816 87.0142 16.9123C86.648 16.7399 86.3572 16.4922 86.1417 16.169C85.9263 15.8428 85.8186 15.4489 85.8186 14.9872C85.8186 14.581 85.8986 14.2517 86.0586 13.9993C86.2187 13.7438 86.4326 13.5438 86.7003 13.3991C86.9681 13.2545 87.2635 13.1468 87.5867 13.076C87.9129 13.0021 88.2407 12.9437 88.57 12.9006C89.0009 12.8452 89.3502 12.8036 89.6179 12.7759C89.8888 12.7451 90.0857 12.6944 90.2089 12.6236C90.335 12.5528 90.3981 12.4297 90.3981 12.2543V12.2173C90.3981 11.7618 90.2735 11.4079 90.0242 11.1555C89.778 10.9032 89.404 10.777 88.9024 10.777C88.3823 10.777 87.9745 10.8909 87.679 11.1186C87.3836 11.3464 87.1758 11.5895 87.0558 11.848L86.0217 11.4787C86.2064 11.0478 86.4526 10.7124 86.7603 10.4723C87.0712 10.2292 87.4097 10.0599 87.776 9.96449C88.1453 9.866 88.5084 9.81676 88.8655 9.81676C89.0932 9.81676 89.3548 9.84446 89.6503 9.89986C89.9488 9.95218 90.2366 10.0614 90.5135 10.2276C90.7936 10.3938 91.026 10.6446 91.2106 10.9801C91.3953 11.3156 91.4876 11.7649 91.4876 12.3281V17H90.3981V16.0398H90.3427C90.2689 16.1937 90.1458 16.3583 89.9734 16.5337C89.8011 16.7092 89.5718 16.8584 89.2856 16.9815C88.9993 17.1046 88.65 17.1662 88.2376 17.1662ZM88.4038 16.1875C88.8347 16.1875 89.1978 16.1029 89.4933 15.9336C89.7918 15.7643 90.0165 15.5458 90.1673 15.2781C90.3212 15.0103 90.3981 14.7287 90.3981 14.4332V13.4361C90.352 13.4915 90.2504 13.5423 90.0934 13.5884C89.9396 13.6315 89.7611 13.67 89.5579 13.7038C89.3579 13.7346 89.1624 13.7623 88.9716 13.7869C88.7839 13.8085 88.6316 13.8269 88.5146 13.8423C88.2315 13.8793 87.9668 13.9393 87.7206 14.0224C87.4774 14.1024 87.2805 14.224 87.1297 14.3871C86.9819 14.5471 86.9081 14.7656 86.9081 15.0426C86.9081 15.4212 87.0481 15.7074 87.3282 15.9013C87.6113 16.0921 87.9699 16.1875 88.4038 16.1875ZM98.4989 11.4972L97.5202 11.7741C97.4586 11.611 97.3679 11.4525 97.2478 11.2987C97.1309 11.1417 96.9708 11.0124 96.7677 10.9109C96.5646 10.8093 96.3045 10.7585 95.9875 10.7585C95.5536 10.7585 95.192 10.8585 94.9027 11.0586C94.6164 11.2556 94.4733 11.5064 94.4733 11.8111C94.4733 12.0819 94.5718 12.2958 94.7688 12.4528C94.9657 12.6097 95.2735 12.7405 95.6921 12.8452L96.7446 13.1037C97.3786 13.2576 97.851 13.493 98.1619 13.81C98.4727 14.1239 98.6282 14.5286 98.6282 15.0241C98.6282 15.4304 98.5112 15.7936 98.2773 16.1136C98.0465 16.4337 97.7233 16.6861 97.3078 16.8707C96.8924 17.0554 96.4092 17.1477 95.8583 17.1477C95.135 17.1477 94.5364 16.9908 94.0625 16.6768C93.5885 16.3629 93.2884 15.9044 93.1622 15.3011L94.1963 15.0426C94.2948 15.4242 94.481 15.7105 94.7549 15.9013C95.0319 16.0921 95.3935 16.1875 95.8398 16.1875C96.3476 16.1875 96.7508 16.0798 97.0493 15.8643C97.3509 15.6458 97.5017 15.3842 97.5017 15.0795C97.5017 14.8333 97.4156 14.6271 97.2432 14.4609C97.0709 14.2917 96.8062 14.1655 96.4492 14.0824L95.2674 13.8054C94.618 13.6515 94.1409 13.413 93.8362 13.0898C93.5346 12.7636 93.3838 12.3558 93.3838 11.8665C93.3838 11.4664 93.4962 11.1125 93.7208 10.8047C93.9486 10.4969 94.2579 10.2553 94.6487 10.0799C95.0427 9.90447 95.4889 9.81676 95.9875 9.81676C96.6892 9.81676 97.2401 9.97064 97.6402 10.2784C98.0434 10.5862 98.3296 10.9924 98.4989 11.4972ZM103.241 17.1477C102.558 17.1477 101.969 16.9969 101.473 16.6953C100.981 16.3906 100.601 15.9659 100.333 15.4212C100.068 14.8733 99.9358 14.2363 99.9358 13.5099C99.9358 12.7836 100.068 12.1435 100.333 11.5895C100.601 11.0324 100.973 10.5985 101.45 10.2876C101.93 9.97372 102.49 9.81676 103.13 9.81676C103.5 9.81676 103.864 9.87831 104.224 10.0014C104.585 10.1245 104.912 10.3246 105.208 10.6016C105.503 10.8755 105.739 11.2386 105.914 11.6911C106.09 12.1435 106.177 12.7005 106.177 13.3622V13.8239H100.711V12.8821H105.069C105.069 12.482 104.989 12.125 104.829 11.8111C104.672 11.4972 104.448 11.2494 104.155 11.0678C103.866 10.8862 103.524 10.7955 103.13 10.7955C102.696 10.7955 102.321 10.9032 102.004 11.1186C101.69 11.331 101.448 11.608 101.279 11.9496C101.11 12.2912 101.025 12.6574 101.025 13.0483V13.6761C101.025 14.2116 101.118 14.6656 101.302 15.038C101.49 15.4073 101.75 15.6889 102.082 15.8828C102.415 16.0736 102.801 16.169 103.241 16.169C103.527 16.169 103.786 16.129 104.017 16.049C104.251 15.9659 104.452 15.8428 104.621 15.6797C104.791 15.5135 104.922 15.3073 105.014 15.0611L106.066 15.3565C105.956 15.7135 105.769 16.0275 105.508 16.2983C105.246 16.5661 104.923 16.7753 104.538 16.9261C104.154 17.0739 103.721 17.1477 103.241 17.1477ZM110.512 17.1477C109.921 17.1477 109.4 16.9985 108.947 16.6999C108.495 16.3983 108.141 15.9736 107.885 15.4258C107.63 14.8749 107.502 14.224 107.502 13.473C107.502 12.7282 107.63 12.0819 107.885 11.5341C108.141 10.9863 108.496 10.5631 108.952 10.2646C109.407 9.96603 109.934 9.81676 110.531 9.81676C110.992 9.81676 111.357 9.8937 111.625 10.0476C111.896 10.1984 112.102 10.3707 112.243 10.5646C112.388 10.7554 112.5 10.9124 112.58 11.0355H112.673V7.54545H113.762V17H112.71V15.9105H112.58C112.5 16.0398 112.386 16.2029 112.239 16.3999C112.091 16.5937 111.88 16.7676 111.606 16.9215C111.332 17.0723 110.968 17.1477 110.512 17.1477ZM110.66 16.169C111.097 16.169 111.466 16.0552 111.768 15.8274C112.069 15.5966 112.299 15.2781 112.456 14.8718C112.613 14.4625 112.691 13.9901 112.691 13.4545C112.691 12.9252 112.614 12.462 112.46 12.065C112.306 11.6649 112.079 11.354 111.777 11.1325C111.475 10.9078 111.103 10.7955 110.66 10.7955C110.198 10.7955 109.813 10.9139 109.506 11.1509C109.201 11.3848 108.972 11.7034 108.818 12.1065C108.667 12.5066 108.592 12.956 108.592 13.4545C108.592 13.9593 108.669 14.4179 108.822 14.8303C108.979 15.2396 109.21 15.5658 109.515 15.8089C109.823 16.049 110.204 16.169 110.66 16.169Z'
                    fill='#002736'
                  />
                </svg>
              </div>
              <div className='project-service-description'>
                <div className='project-service'>
                  <span>Service Name</span>
                  <input type='text' />
                </div>

                <div className='project-description'>
                  <span>Description</span>
                  <textarea></textarea>
                </div>
              </div>

              <div className='pricing-project'>
                <span>Pricing</span>
                <div className='nigeria-price'>
                  <button>
                    <div className='nigeria-down'>
                      <img src={nigeria} />
                      <div className='ngn-down'>
                        <span>NGN</span>
                        <svg
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                            stroke='#1D2E2E'
                            strokeOpacity='0.8'
                            strokeMiterlimit='10'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </button>
                  <input type='text' placeholder='0.00' />
                </div>
              </div>
            </div>
            <div className='project-choose-daytime'>
              <>
                <button className='reschedulebook'>
                  <span>Choose Day and Time</span>
                </button>
                <hr />

                <div className='input-time'>
                  <div className='warning-container first-warning'>
                    <svg
                      width='14'
                      height='15'
                      viewBox='0 0 14 15'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clip-path='url(#clip0_8381_1228)'>
                        <path
                          d='M7 14.0625C5.70206 14.0625 4.43327 13.6776 3.35407 12.9565C2.27488 12.2354 1.43374 11.2105 0.937043 10.0114C0.440343 8.81222 0.310384 7.49272 0.5636 6.21972C0.816815 4.94672 1.44183 3.7774 2.35961 2.85961C3.2774 1.94183 4.44672 1.31682 5.71972 1.0636C6.99272 0.810384 8.31222 0.940343 9.51136 1.43704C10.7105 1.93374 11.7354 2.77488 12.4565 3.85407C13.1776 4.93327 13.5625 6.20206 13.5625 7.5C13.5625 9.24049 12.8711 10.9097 11.6404 12.1404C10.4097 13.3711 8.74049 14.0625 7 14.0625ZM7 1.8125C5.87512 1.8125 4.7755 2.14607 3.8402 2.77102C2.90489 3.39597 2.17591 4.28424 1.74544 5.32349C1.31496 6.36274 1.20233 7.50631 1.42179 8.60958C1.64124 9.71285 2.18292 10.7263 2.97833 11.5217C3.77374 12.3171 4.78716 12.8588 5.89043 13.0782C6.99369 13.2977 8.13726 13.185 9.17651 12.7546C10.2158 12.3241 11.104 11.5951 11.729 10.6598C12.3539 9.7245 12.6875 8.62488 12.6875 7.5C12.6875 5.99158 12.0883 4.54495 11.0217 3.47833C9.95506 2.41172 8.50842 1.8125 7 1.8125Z'
                          fill='#EBF9FF'
                        />
                        <path
                          d='M7 11C6.82694 11 6.65777 10.9487 6.51388 10.8525C6.36998 10.7564 6.25783 10.6197 6.19161 10.4598C6.12538 10.3 6.10805 10.124 6.14181 9.9543C6.17558 9.78456 6.25891 9.62865 6.38128 9.50628C6.50365 9.38391 6.65956 9.30057 6.8293 9.26681C6.99903 9.23305 7.17496 9.25038 7.33485 9.31661C7.49473 9.38283 7.63139 9.49498 7.72754 9.63888C7.82368 9.78277 7.875 9.95194 7.875 10.125C7.875 10.3571 7.78281 10.5796 7.61872 10.7437C7.45462 10.9078 7.23206 11 7 11ZM7 8.375C6.88397 8.375 6.77269 8.32891 6.69064 8.24686C6.60859 8.16481 6.5625 8.05353 6.5625 7.9375V4C6.5625 3.88397 6.60859 3.77269 6.69064 3.69064C6.77269 3.60859 6.88397 3.5625 7 3.5625C7.11603 3.5625 7.22731 3.60859 7.30936 3.69064C7.39141 3.77269 7.4375 3.88397 7.4375 4V7.9375C7.4375 8.05353 7.39141 8.16481 7.30936 8.24686C7.22731 8.32891 7.11603 8.375 7 8.375Z'
                          fill='#EBF9FF'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_8381_1228'>
                          <rect
                            width='14'
                            height='14'
                            fill='white'
                            transform='translate(0 0.5)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <span>Make sure to input time in every selected day</span>
                  </div>
                  <div className='time-booking-period'>
                    <Time />
                    <BookingPeriod />
                  </div>
                  <div className='cancel-done'>
                    <button className='cancel-time' onClick={Cancel}>
                      Cancel
                    </button>
                    <button className='done-time' onClick={Done}>
                      Done
                    </button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
