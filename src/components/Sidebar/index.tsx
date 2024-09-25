"use client";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
  IoCalendarOutline,
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import * as S from "./styles";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { INFO_LIST } from "./data";
import classNames from "classnames";
import { SiBattledotnet, SiRiotgames } from "react-icons/si";

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <S.Wrapper>
      <S.ImageBox>AVATAR</S.ImageBox>
      <S.Name>Paulo Martins</S.Name>
      <S.Tag>Frontend Developer</S.Tag>

      <S.Separator />

      {INFO_LIST.map((item) => (
        <S.InfoBox key={item.id}>
          <S.IconBox>{item.icon}</S.IconBox>
          <S.InfoContent>
            <S.InfoName>{item.name}</S.InfoName>
            <S.InfoValue className={classNames({ url: !!item.url })}>
              {item.value}
            </S.InfoValue>
          </S.InfoContent>
        </S.InfoBox>
      ))}

      <S.SocialList>
        <S.SOcialIconBx>
          <BsGithub />
        </S.SOcialIconBx>
        <S.SOcialIconBx>
          <SiBattledotnet />
        </S.SOcialIconBx>
        <S.SOcialIconBx>
          <BsTwitter />
        </S.SOcialIconBx>
        <S.SOcialIconBx>
          <SiRiotgames />
        </S.SOcialIconBx>
      </S.SocialList>
    </S.Wrapper>
  );
};

export default Sidebar;
