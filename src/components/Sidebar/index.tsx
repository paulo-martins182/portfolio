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
import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsWhatsapp,
} from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import { INFO_LIST, PHONE_LINK, WOW_LINK } from "./data";
import classNames from "classnames";
import { SiBattledotnet, SiRiotgames } from "react-icons/si";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <S.Wrapper>
      <S.ImageBox>
        <Image
          src="/images/profile.jpg"
          width={250}
          height={150}
          alt="foto de perfil"
          objectFit="cover"
        />
      </S.ImageBox>
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
        <S.SocialIconBox
          href="https://github.com/paulo-martins182"
          target="_blank"
        >
          <BsGithub />
        </S.SocialIconBox>
        <S.SocialIconBox
          href={WOW_LINK}
          target="_blank"
          className={classNames({ disabled: false })}
        >
          <SiBattledotnet />
        </S.SocialIconBox>
        <S.SocialIconBox
          href={PHONE_LINK}
          target="_blank"
          className={classNames({ disabled: false })}
        >
          <BsWhatsapp />
        </S.SocialIconBox>
        <S.SocialIconBox
          href="#"
          target="_blank"
          className={classNames({ disabled: true })}
        >
          <BsLinkedin />
        </S.SocialIconBox>
      </S.SocialList>
    </S.Wrapper>
  );
};

export default Sidebar;
