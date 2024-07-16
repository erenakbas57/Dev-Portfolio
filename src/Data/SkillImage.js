import * as adobeXd from '../assets/skills/adobe-xd.svg';
import adobeaudition from '../assets/skills/adobeaudition.svg';
import afterEffects from '../assets/skills/after-effects.svg';
import angular from '../assets/skills/angular.svg';
import aws from '../assets/skills/aws.svg';
import azure from '../assets/skills/azure.svg';
import blender from '../assets/skills/blender.svg';
import bootstrap from '../assets/skills/bootstrap.svg';
import bulma from '../assets/skills/bulma.svg';
import c from '../assets/skills/c.svg';
import canva from '../assets/skills/canva.svg';
import capacitorjs from '../assets/skills/capacitorjs.svg';
import coffeescript from '../assets/skills/coffeescript.svg';
import cplusplus from '../assets/skills/cplusplus.svg';
import csharp from '../assets/skills/csharp.svg';
import css from '../assets/skills/css.svg';
import dart from '../assets/skills/dart.svg';
import deno from '../assets/skills/deno.svg';
import django from '../assets/skills/django.svg';
import docker from '../assets/skills/docker.svg';
import fastify from '../assets/skills/fastify.svg';
import figma from '../assets/skills/figma.svg';
import firebase from '../assets/skills/firebase.svg';
import flutter from '../assets/skills/flutter.svg';
import gcp from '../assets/skills/gcp.svg';
import gimp from '../assets/skills/gimp.svg';
import git from '../assets/skills/git.svg';
import go from '../assets/skills/go.svg';
import graphql from '../assets/skills/graphql.svg';
import haxe from '../assets/skills/haxe.svg';
import html from '../assets/skills/html.svg';
import illustrator from '../assets/skills/illustrator.svg';
import ionic from '../assets/skills/ionic.svg';
import java from '../assets/skills/java.svg';
import javascript from '../assets/skills/javascript.svg';
import julia from '../assets/skills/julia.svg';
import kotlin from '../assets/skills/kotlin.svg';
import lightroom from '../assets/skills/lightroom.svg';
import markdown from '../assets/skills/markdown.svg';
import materialui from '../assets/skills/materialui.svg';
import matlab from '../assets/skills/matlab.svg';
import memsql from '../assets/skills/memsql.svg';
import microsoftoffice from '../assets/skills/microsoftoffice.svg';
import mongoDB from '../assets/skills/mongoDB.svg';
import mysql from '../assets/skills/mysql.svg';
import nextJS from '../assets/skills/nextJS.svg';
import nginx from '../assets/skills/nginx.svg';
import numpy from '../assets/skills/numpy.svg';
import nuxtJS from '../assets/skills/nuxtJS.svg';
import opencv from '../assets/skills/opencv.svg';
import photoshop from '../assets/skills/photoshop.svg';
import php from '../assets/skills/php.svg';
import picsart from '../assets/skills/picsart.svg';
import postgresql from '../assets/skills/postgresql.svg';
import premierepro from '../assets/skills/premierepro.svg';
import python from '../assets/skills/python.svg';
import pytorch from '../assets/skills/pytorch.svg';
import react from '../assets/skills/react.svg';
import ruby from '../assets/skills/ruby.svg';
import selenium from '../assets/skills/selenium.svg';
import sketch from '../assets/skills/sketch.svg';
import strapi from '../assets/skills/strapi.svg';
import svelte from '../assets/skills/svelte.svg';
import swift from '../assets/skills/swift.svg';
import tailwind from '../assets/skills/tailwind.svg';
import tensorflow from '../assets/skills/tensorflow.svg';
import typescript from '../assets/skills/typescript.svg';
import unity from '../assets/skills/unity.svg';
import vitejs from '../assets/skills/vitejs.svg';
import vue from '../assets/skills/vue.svg';
import vuetifyjs from '../assets/skills/vuetifyjs.svg';
import webix from '../assets/skills/webix.svg';
import wolframalpha from '../assets/skills/wolframalpha.svg';
import wordpress from '../assets/skills/wordpress.svg';
import netframework from '../assets/skills/netframework.png';
import shell from '../assets/skills/shell.png';
import game from '../assets/skills/game.png';

export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
      case 'game':
        return game;
      case '.net framework':
        return netframework;
      case 'adobe audition':
        return adobeaudition;
      case 'adobe xd':
        return adobeXd;
      case 'after effects':
        return afterEffects;
      case 'angular':
        return angular;
      case 'aws':
        return aws;
      case 'azure':
        return azure;
      case 'blender':
        return blender;
      case 'bootstrap':
        return bootstrap;
      case 'bulma':
        return bulma;
      case 'c':
        return c;
      case 'c#':
        return csharp;
      case 'c++':
        return cplusplus;
      case 'canva':
        return canva;
      case 'capacitorjs':
        return capacitorjs;
      case 'coffeescript':
        return coffeescript;
      case 'css':
        return css;
      case 'dart':
        return dart;
      case 'deno':
        return deno;
      case 'django':
        return django;
      case 'docker':
        return docker;
      case 'fastify':
        return fastify;
      case 'figma':
        return figma;
      case 'firebase':
        return firebase;
      case 'flutter':
        return flutter;
      case 'gcp':
        return gcp;
      case 'gimp':
        return gimp;
      case 'git':
        return git;
      case 'go':
        return go;
      case 'graphql':
        return graphql;
      case 'haxe':
        return haxe;
      case 'html':
        return html;
      case 'illustrator':
        return illustrator;
      case 'ionic':
        return ionic;
      case 'java':
        return java;
      case 'javascript':
        return javascript;
      case 'julia':
        return julia;
      case 'kotlin':
        return kotlin;
      case 'lightroom':
        return lightroom;
      case 'markdown':
        return markdown;
      case 'materialui':
        return materialui;
      case 'matlab':
        return matlab;
      case 'memsql':
        return memsql;
      case 'microsoft office':
        return microsoftoffice;
      case 'mongodb':
        return mongoDB;
      case 'mysql':
        return mysql;
      case 'next js':
        return nextJS;
      case 'nginx':
        return nginx;
      case 'nuxt js':
        return nuxtJS;
      case 'numpy':
        return numpy;
      case 'opencv':
        return opencv;
      case 'photoshop':
        return photoshop;
      case 'php':
        return php;
      case 'picsart':
        return picsart;
      case 'postgresql':
        return postgresql;
      case 'premiere pro':
        return premierepro;
      case 'python':
        return python;
      case 'pytorch':
        return pytorch;
      case 'react':
        return react;
      case 'ruby':
        return ruby;
      case 'selenium':
        return selenium;
      case 'shell':
        return shell;
      case 'sketch':
        return sketch;
      case 'strapi':
        return strapi;
      case 'svelte':
        return svelte;
      case 'swift':
        return swift;
      case 'tailwind':
        return tailwind;
      case 'tensorflow':
        return tensorflow;
      case 'typescript':
        return typescript;
      case 'unity':
        return unity;
      case 'vitejs':
        return vitejs;
      case 'vue':
        return vue;
      case 'vuetifyjs':
        return vuetifyjs;
      case 'webix':
        return webix;
      case 'wolframalpha':
        return wolframalpha;
      case 'wordpress':
        return wordpress;
      default:
        break;
    }
  }
  


export default skillsImage;