import { useState, useEffect } from "react";

const WORKOUT_DATA = {
  1: {
    label: "Semana 1",
    days: {
      Segunda: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Pulley frente", series: 3, tecnica: "" },
        { name: "Pulley com triângulo", series: 3, tecnica: "" },
        { name: "Remada pronada aberta máquina", series: 3, tecnica: "" },
        { name: "Deltóide posterior máquina", series: 3, tecnica: "" },
        { name: "Rosca direta", series: 3, tecnica: "" },
        { name: "Rosca alternada", series: 3, tecnica: "" },
        { name: "Extensão lombar", series: 3, tecnica: "" },
      ],
      Terça: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento livre", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "" },
        { name: "Mesa flexora", series: 3, tecnica: "" },
        { name: "Panturrilha sentada", series: 3, tecnica: "" },
        { name: "Abdômen máquina", series: 3, tecnica: "" },
      ],
      Quarta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Supino reto", series: 3, tecnica: "" },
        { name: "Dumbbell press reto", series: 3, tecnica: "" },
        { name: "Dumbbell press inclinado", series: 3, tecnica: "" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "" },
        { name: "Tríceps pulley", series: 3, tecnica: "" },
        { name: "Tríceps testa", series: 3, tecnica: "" },
        { name: "Abdômen supra solo", series: 3, tecnica: "" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "" },
        { name: "Mesa flexora", series: 3, tecnica: "" },
        { name: "Cadeira abdutora", series: 3, tecnica: "" },
        { name: "Cadeira abdutora", series: 3, tecnica: "" },
        { name: "Panturrilha sentada", series: 3, tecnica: "" },
      ],
      Sexta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Pulley frente", series: 3, tecnica: "" },
        { name: "Supino reto", series: 3, tecnica: "" },
        { name: "Pulley com triângulo", series: 3, tecnica: "" },
        { name: "Dumbbell press reto", series: 3, tecnica: "" },
        { name: "Remada pronada aberta máquina", series: 3, tecnica: "" },
        { name: "Dumbbell press inclinado", series: 3, tecnica: "" },
        { name: "Abdômen infra", series: 3, tecnica: "" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento livre", series: 4, tecnica: "" },
        { name: "Pulley frente", series: 3, tecnica: "" },
        { name: "Supino reto", series: 3, tecnica: "" },
        { name: "Rosca direta", series: 3, tecnica: "" },
        { name: "Tríceps pulley", series: 3, tecnica: "" },
        { name: "Deltóide posterior máquina", series: 3, tecnica: "" },
      ],
    },
  },
  2: {
    label: "Semana 2",
    days: {
      Segunda: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Contração de pico" },
        { name: "Remada baixa", series: 3, tecnica: "" },
        { name: "Pulley frente", series: 3, tecnica: "Drop set" },
        { name: "Crucifixo inverso", series: 3, tecnica: "" },
        { name: "Rosca simultânea", series: 3, tecnica: "Drop set" },
        { name: "Rosca martelo", series: 3, tecnica: "Contração de pico" },
        { name: "Extensão lombar", series: 3, tecnica: "" },
      ],
      Terça: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "1 rest" },
        { name: "Afundo no smith", series: 3, tecnica: "" },
        { name: "Mesa flexora", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Panturrilha em pé", series: 3, tecnica: "Contração de pico" },
        { name: "Abdômen ajoelhado", series: 3, tecnica: "Contração de pico" },
      ],
      Quarta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Supino máquina", series: 3, tecnica: "" },
        { name: "Dumbbell press", series: 3, tecnica: "" },
        { name: "Crucifixo máquina", series: 3, tecnica: "Contração de pico" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "" },
        { name: "Tríceps pulley corda", series: 3, tecnica: "Contração de pico" },
        { name: "Tríceps francês", series: 3, tecnica: "" },
        { name: "Abdômen máquina", series: 3, tecnica: "" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Afundo", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Mesa flexora", series: 3, tecnica: "Drop set" },
        { name: "Cadeira abdutora", series: 3, tecnica: "Contração de pico" },
        { name: "Cadeira adutora", series: 3, tecnica: "" },
        { name: "Panturrilha em pé", series: 3, tecnica: "Contração de pico" },
      ],
      Sexta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Contração de pico" },
        { name: "Supino máquina", series: 3, tecnica: "Drop set" },
        { name: "Remada baixa", series: 3, tecnica: "" },
        { name: "Dumbbell press", series: 3, tecnica: "1 rest" },
        { name: "Pulley frente", series: 3, tecnica: "" },
        { name: "Crucifixo máquina", series: 3, tecnica: "" },
        { name: "Prancha ventral", series: 3, tecnica: "" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "" },
        { name: "Agachamento livre", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Contração de pico" },
        { name: "Supino máquina", series: 3, tecnica: "" },
        { name: "Rosca martelo", series: 3, tecnica: "" },
        { name: "Tríceps pulley corda", series: 3, tecnica: "Contração de pico" },
        { name: "Crucifixo inverso", series: 3, tecnica: "" },
      ],
    },
  },
  3: {
    label: "Semana 3",
    days: {
      Segunda: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "" },
        { name: "Pulley frente triângulo", series: 3, tecnica: "" },
        { name: "Crucifixo inverso", series: 3, tecnica: "Rest pause" },
        { name: "Rosca scott", series: 3, tecnica: "Excêntrica lenta" },
        { name: "Rosca direta", series: 3, tecnica: "" },
        { name: "Extensão lombar", series: 3, tecnica: "Explosão concêntrica" },
      ],
      Terça: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 3, tecnica: "Rest pause" },
        { name: "Leg press", series: 3, tecnica: "Rest pause" },
        { name: "Agachamento frontal", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "" },
        { name: "Mesa flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Panturrilha sentada", series: 3, tecnica: "" },
        { name: "Abdômen infra prancha", series: 3, tecnica: "" },
      ],
      Quarta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Supino máquina", series: 3, tecnica: "" },
        { name: "Supino inclinado", series: 3, tecnica: "" },
        { name: "Cross over puxando em baixo", series: 3, tecnica: "" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "Rest pause" },
        { name: "Tríceps testa", series: 3, tecnica: "Excêntrica lenta" },
        { name: "Tríceps coice", series: 3, tecnica: "" },
        { name: "Abdômen ajoelhado na polia", series: 3, tecnica: "Explosão concêntrica" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Drop set" },
        { name: "Mesa flexora", series: 3, tecnica: "Explosão concêntrica" },
        { name: "Flexora em pé unilateral", series: 3, tecnica: "Excêntrica lenta" },
        { name: "Stiff", series: 3, tecnica: "" },
        { name: "Cadeira abdutora", series: 3, tecnica: "Contração de pico" },
        { name: "Panturrilha em pé", series: 3, tecnica: "Contração de pico" },
      ],
      Sexta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Contração de pico" },
        { name: "Supino máquina", series: 3, tecnica: "Drop set" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "" },
        { name: "Supino inclinado", series: 3, tecnica: "" },
        { name: "Cross over puxando em baixo", series: 3, tecnica: "" },
        { name: "Pulley frente triângulo", series: 3, tecnica: "Drop set" },
        { name: "Abdômen máquina", series: 3, tecnica: "" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "Rest pause" },
        { name: "Agachamento frontal", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Supino máquina", series: 3, tecnica: "Drop set" },
        { name: "Rosca scott", series: 3, tecnica: "Excêntrica lenta" },
        { name: "Tríceps testa", series: 3, tecnica: "Excêntrica lenta" },
        { name: "Crucifixo inverso", series: 3, tecnica: "Contração de pico" },
      ],
    },
  },
  4: {
    label: "Semana 4",
    days: {
      Segunda: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Pulley frente", series: 3, tecnica: "Bi – set A" },
        { name: "Pulley frente fechado", series: 3, tecnica: "Bi – set A" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Deltóide posterior cabo", series: 3, tecnica: "Contração de pico" },
        { name: "Rosca simultânea", series: 3, tecnica: "" },
        { name: "Rosca concentrada na perna", series: 3, tecnica: "" },
        { name: "Extensão lombar", series: 3, tecnica: "" },
      ],
      Terça: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "Rest pause" },
        { name: "Agachamento livre", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 3, tecnica: "Explosão concêntrica" },
        { name: "Afundo no smith", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Mesa flexora", series: 3, tecnica: "Drop set" },
        { name: "Panturrilha em pé", series: 3, tecnica: "Contração de pico" },
        { name: "Panturrilha em pé uni", series: 3, tecnica: "" },
      ],
      Quarta: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Supino reto", series: 3, tecnica: "" },
        { name: "Cross over", series: 3, tecnica: "Contração de pico" },
        { name: "Dumbbell press inclinado", series: 3, tecnica: "" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "" },
        { name: "Tríceps pulley", series: 3, tecnica: "Drop set" },
        { name: "Tríceps francês unilateral", series: 3, tecnica: "" },
        { name: "Abdômen máquina", series: 3, tecnica: "Contração de pico" },
      ],
      Quinta: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Elevação pélvica", series: 3, tecnica: "Contração de pico" },
        { name: "Levantamento terra", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Drop set" },
        { name: "Mesa flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Afundo", series: 3, tecnica: "" },
        { name: "Cadeira abdutora", series: 3, tecnica: "Contração de pico" },
        { name: "Panturrilha em pé", series: 3, tecnica: "" },
      ],
      Sexta: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico" },
        { name: "Supino reto", series: 3, tecnica: "" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "" },
        { name: "Dumbbell press", series: 3, tecnica: "Drop set" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Cross over", series: 3, tecnica: "Contração de pico" },
        { name: "Desenvolvimento com dumbbell", series: 3, tecnica: "" },
        { name: "Abdômen máquina", series: 3, tecnica: "Contração de pico" },
      ],
      Sábado: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Agachamento livre", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "Excêntrica lenta" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "Bi – set A" },
        { name: "Supino reto", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca simultânea", series: 3, tecnica: "Bi – set B" },
        { name: "Tríceps pulley", series: 3, tecnica: "Bi – set B" },
        { name: "Deltóide posterior cabo", series: 3, tecnica: "Contração de pico" },
      ],
    },
  },
  5: {
    label: "Semana 5",
    days: {
      Segunda: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Pulley frente", series: 1, tecnica: "Cluster set" },
        { name: "Pulley frente triângulo", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Contração de pico" },
        { name: "Deltóide posterior máquina", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Rosca scott", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca simultânea", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca martelo", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Extensão lombar", series: 3, tecnica: "" },
      ],
      Terça: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Leg press", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento livre", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 3, tecnica: "Rest pause" },
        { name: "Afundo no smith", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Stiff", series: 3, tecnica: "" },
        { name: "Panturrilha sentada", series: 3, tecnica: "Contração de pico" },
        { name: "Panturrilha no leg press", series: 3, tecnica: "Contração de pico + drop set" },
      ],
      Quarta: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Dumbbell press", series: 3, tecnica: "" },
        { name: "Cross over", series: 3, tecnica: "Contração de pico" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "Contração de pico" },
        { name: "Tríceps pulley corda", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps pulley corda fechado", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps testa", series: 3, tecnica: "Rest pause" },
        { name: "Abdômen ajoelhado na polia", series: 3, tecnica: "Contração de pico" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 1, tecnica: "Cluster set" },
        { name: "Cadeira flexora", series: 3, tecnica: "Rest pause" },
        { name: "Mesa flexora", series: 3, tecnica: "Contração de pico + excêntrica lenta" },
        { name: "Elevação pélvica", series: 3, tecnica: "Explosão concêntrica + contração de pico" },
        { name: "Afundo", series: 3, tecnica: "" },
        { name: "Stiff", series: 3, tecnica: "" },
        { name: "Panturrilha sentada", series: 3, tecnica: "Contração de pico" },
      ],
      Sexta: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Pulley frente", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Pulley frente triângulo", series: 3, tecnica: "Drop set" },
        { name: "Dumbbell press", series: 3, tecnica: "Drop set" },
        { name: "Remada máquina pronada aberta", series: 3, tecnica: "Contração de pico" },
        { name: "Cross over", series: 3, tecnica: "Contração de pico" },
        { name: "Desenvolvimento com dumbbell", series: 3, tecnica: "Drop set" },
        { name: "Abdômen máquina", series: 3, tecnica: "Contração de pico" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Leg press", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento búlgaro", series: 4, tecnica: "" },
        { name: "Pulley frente", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Rosca direta", series: 1, tecnica: "Cluster set" },
        { name: "Tríceps pulley", series: 1, tecnica: "Cluster set" },
        { name: "Deltóide posterior máquina", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Elevação plano clavicular", series: 3, tecnica: "Strip set" },
      ],
    },
  },
  6: {
    label: "Semana 6",
    days: {
      Segunda: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Remada baixa", series: 3, tecnica: "Drop set" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Crucifixo inverso", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Rosca spider", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca direta", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca martelo", series: 3, tecnica: "Contração de pico + rest pause" },
        { name: "Extensão lombar", series: 3, tecnica: "Contração de pico" },
      ],
      Terça: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "Explosão concêntrica + rest pause" },
        { name: "Cadeira flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Mesa flexora", series: 3, tecnica: "" },
        { name: "Flexora unilateral", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Stiff", series: 3, tecnica: "" },
        { name: "Panturrilha no leg press", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Panturrilha sentada", series: 3, tecnica: "Contração de pico rest pause" },
      ],
      Quarta: [
        { name: "Sprint", series: "3x20seg", tecnica: "" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Supino reto", series: 3, tecnica: "Rest pause" },
        { name: "Crucifixo máquina", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Elevação lateral unilateral no cabo", series: 3, tecnica: "No stop" },
        { name: "Tríceps testa", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps supinado", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps pulley", series: 3, tecnica: "Contração de pico + rest pause" },
        { name: "Abdômen máquina", series: 3, tecnica: "Contração de pico + drop set" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 1, tecnica: "Cluster set" },
        { name: "Elevação pélvica", series: 1, tecnica: "Cluster set" },
        { name: "Afundo", series: 3, tecnica: "" },
        { name: "Flexora sentada", series: 3, tecnica: "Explosão concêntrica + contração de pico" },
        { name: "Flexora deitada", series: 3, tecnica: "Explosão concêntrica + drop set" },
        { name: "Cadeira abdutora", series: 3, tecnica: "Explosão concêntrica + drop set" },
        { name: "Cadeira adutora", series: 3, tecnica: "Explosão concêntrica + drop set" },
        { name: "Stiff", series: 3, tecnica: "" },
      ],
      Sexta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Remada baixa", series: 3, tecnica: "Drop set" },
        { name: "Supino reto", series: 3, tecnica: "Rest pause" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Crucifixo máquina", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Desenvolvimento com barra", series: 3, tecnica: "Explosão concêntrica + rest pause" },
        { name: "Abdômen infra na prancha", series: 3, tecnica: "Contração de pico" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 1, tecnica: "Cluster set" },
        { name: "Leg press", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento livre", series: 1, tecnica: "Cluster set" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Rosca martelo", series: 1, tecnica: "Cluster set" },
        { name: "Tríceps pulley", series: 1, tecnica: "Cluster set" },
        { name: "Deltóide posterior cabo", series: 3, tecnica: "Contração de pico" },
        { name: "Elevação plano clavicular", series: 3, tecnica: "Strip set" },
      ],
    },
  },
  7: {
    label: "Semana 7",
    days: {
      Segunda: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Remada curvada pronada aberta", series: 2, tecnica: "Drop set" },
        { name: "Remada baixa", series: 3, tecnica: "Drop set" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Crucifixo inverso", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Rosca spider", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca direta", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca martelo", series: 3, tecnica: "Contração de pico + rest pause" },
      ],
      Terça: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento", series: 3, tecnica: "" },
        { name: "Leg press", series: 3, tecnica: "Explosão concêntrica + rest pause" },
        { name: "Agachamento búlgaro", series: 3, tecnica: "" },
        { name: "Cadeira flexora", series: 3, tecnica: "Contração de pico" },
        { name: "Mesa flexora", series: 3, tecnica: "Drop set" },
        { name: "Flexora unilateral", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Stiff", series: 3, tecnica: "" },
        { name: "Panturrilha no leg press", series: 4, tecnica: "Contração de pico + drop set" },
        { name: "Panturrilha sentada", series: 4, tecnica: "Contração de pico rest pause" },
      ],
      Quarta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Supino reto", series: 3, tecnica: "Rest pause" },
        { name: "Supino inclinado", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Elevação lateral unilateral no cabo", series: 3, tecnica: "No stop" },
        { name: "Tríceps testa", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps supinado", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps pulley", series: 3, tecnica: "Contração de pico + rest pause" },
        { name: "Prancha ventral", series: 4, tecnica: "Rest pause" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 1, tecnica: "Cluster set" },
        { name: "Elevação pélvica", series: 1, tecnica: "Cluster set" },
        { name: "Afundo", series: 3, tecnica: "" },
        { name: "Agachamento frontal", series: 3, tecnica: "Explosão concêntrica + contração de pico" },
        { name: "Cadeira abdutora", series: 3, tecnica: "Explosão concêntrica + contração de pico" },
        { name: "Flexora deitada", series: 3, tecnica: "Explosão concêntrica + drop set" },
        { name: "Flexora sentada", series: 3, tecnica: "Explosão concêntrica + drop set" },
        { name: "Stiff", series: 3, tecnica: "" },
      ],
      Sexta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Supino reto", series: 3, tecnica: "Rest pause" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Crucifixo máquina", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Desenvolvimento com barra frente", series: 3, tecnica: "Explosão concêntrica + rest pause" },
        { name: "Abdômen máquina", series: 3, tecnica: "Contração de pico + drop set" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 1, tecnica: "Cluster set" },
        { name: "Leg press", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento livre", series: 4, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Rosca martelo", series: 1, tecnica: "Cluster set" },
        { name: "Tríceps pulley", series: 1, tecnica: "Cluster set" },
        { name: "Deltóide posterior cabo", series: 3, tecnica: "Contração de pico" },
        { name: "Elevação plano clavicular", series: 3, tecnica: "Strip set" },
      ],
    },
  },
  8: {
    label: "Semana 8",
    days: {
      Segunda: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Remada baixa", series: 3, tecnica: "Drop set" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Crucifixo inverso", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Rosca spider", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca direta", series: 3, tecnica: "Bi – set A" },
        { name: "Rosca martelo", series: 3, tecnica: "Contração de pico + rest pause" },
        { name: "Extensão lombar", series: 3, tecnica: "" },
      ],
      Terça: [
        { name: "Agachamento hack", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento", series: 4, tecnica: "" },
        { name: "Leg press", series: 4, tecnica: "Explosão concêntrica + rest pause" },
        { name: "Agachamento búlgaro", series: 4, tecnica: "" },
        { name: "Flexora sentada", series: 4, tecnica: "Contração de pico" },
        { name: "Flexora deitada", series: 4, tecnica: "Contração de pico + drop set" },
        { name: "Stiff", series: 4, tecnica: "" },
        { name: "Panturrilha no leg press", series: 4, tecnica: "Contração de pico + drop set" },
        { name: "Panturrilha sentada", series: 4, tecnica: "Contração de pico rest pause" },
      ],
      Quarta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Supino reto", series: 3, tecnica: "Rest pause" },
        { name: "Supino inclinado", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Elevação no plano escapular", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Tríceps testa", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps supinado", series: 3, tecnica: "Bi – set A" },
        { name: "Tríceps pulley", series: 3, tecnica: "Contração de pico + rest pause" },
        { name: "Abdômen ajoelhado na polia", series: 3, tecnica: "Contração de pico + Bi – set B" },
        { name: "Prancha ventral", series: 3, tecnica: "Bi – set B" },
      ],
      Quinta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Levantamento terra", series: 1, tecnica: "Cluster set" },
        { name: "Elevação pélvica", series: 1, tecnica: "Cluster set" },
        { name: "Afundo", series: 4, tecnica: "" },
        { name: "Agachamento frontal", series: 4, tecnica: "Explosão concêntrica + contração de pico" },
        { name: "Cadeira abdutora", series: 4, tecnica: "Explosão concêntrica + contração de pico" },
        { name: "Flexora sentada", series: 4, tecnica: "Explosão concêntrica + drop set" },
        { name: "Flexora em pé unilateral", series: 4, tecnica: "No stop" },
        { name: "Stiff", series: 4, tecnica: "" },
      ],
      Sexta: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Remada curvada pronada aberta", series: 3, tecnica: "Drop set" },
        { name: "Supino reto", series: 3, tecnica: "Rest pause" },
        { name: "Pulley frente", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Crucifixo máquina", series: 3, tecnica: "Contração de pico + drop set" },
        { name: "Desenvolvimento com barra frente", series: 3, tecnica: "Explosão concêntrica + rest pause" },
        { name: "Abdômen infra na prancha", series: 3, tecnica: "Contração de pico + 1 rest" },
      ],
      Sábado: [
        { name: "Sprint", series: 3, tecnica: "" },
        { name: "Agachamento hack", series: 1, tecnica: "Cluster set" },
        { name: "Leg press", series: 1, tecnica: "Cluster set" },
        { name: "Agachamento frontal", series: 4, tecnica: "" },
        { name: "Agachamento búlgaro", series: 3, tecnica: "" },
        { name: "Remada máquina pronada aberta", series: 1, tecnica: "Cluster set" },
        { name: "Supino máquina", series: 1, tecnica: "Cluster set" },
        { name: "Rosca martelo", series: 1, tecnica: "Cluster set" },
        { name: "Tríceps pulley", series: 1, tecnica: "Cluster set" },
        { name: "Deltóide posterior cabo", series: 4, tecnica: "Contração de pico" },
        { name: "Elevação plano clavicular", series: 4, tecnica: "Strip set" },
      ],
    },
  },
};

const DAYS = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

function getStorageKey(week, day, exerciseIdx, field) {
  return `ss_w${week}_${day}_${exerciseIdx}_${field}`;
}

function loadFromStorage(key) {
  try {
    return localStorage.getItem(key) || "";
  } catch { return ""; }
}

function saveToStorage(key, value) {
  try { localStorage.setItem(key, value); } catch {}
}

function getHistoryKey(exerciseName, field) {
  return `ss_hist_${exerciseName.replace(/\s+/g, "_")}_${field}`;
}

function loadHistory(exerciseName) {
  try {
    const raw = localStorage.getItem(getHistoryKey(exerciseName, "all"));
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveHistory(exerciseName, week, day, carga, reps) {
  const history = loadHistory(exerciseName);
  const entry = { week, day, carga, reps, date: new Date().toLocaleDateString("pt-BR") };
  history.push(entry);
  try {
    localStorage.setItem(getHistoryKey(exerciseName, "all"), JSON.stringify(history.slice(-30)));
  } catch {}
}

export default function App() {
  const [activeWeek, setActiveWeek] = useState(1);
  const [activeDay, setActiveDay] = useState("Segunda");
  const [inputs, setInputs] = useState({});
  const [historyModal, setHistoryModal] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [savedFlash, setSavedFlash] = useState(null);
  const [view, setView] = useState("treino");
  const [progressExercise, setProgressExercise] = useState("");
  const [progressHistory, setProgressHistory] = useState([]);

  const t = {
    bg: "#f4f4f0", headerBg: "#ffffff", cardBg: "#ffffff", cardBgAlt: "#eeeee9",
    border: "#deddd8", borderAlt: "#e6e6e0", text: "#111111", textMuted: "#444444",
    textFaint: "#888888", inputBg: "#f9f9f6", inputBorder: "#c8c8c0",
    tagBg: "#e6e6e0", tagOrangeBg: "#fff0e8", btnInactive: "#e6e6e0",
    btnInactiveText: "#555555", btnInactiveBorder: "#d2d2ca", modalBg: "#ffffff",
    modalCardBg: "#f4f4f0", selectBg: "#ffffff", histBtnBg: "#f0f0ea",
  };

  const weekData = WORKOUT_DATA[activeWeek];
  const exercises = weekData?.days[activeDay] || [];

  const [completedWeeks, setCompletedWeeks] = useState(() => {
    try {
      const raw = localStorage.getItem("ss_completed_weeks");
      return raw ? JSON.parse(raw) : [];
    } catch { return []; }
  });

  function toggleWeekCompleted(weekNum) {
    setCompletedWeeks(prev => {
      const updated = prev.includes(weekNum)
        ? prev.filter(w => w !== weekNum)
        : [...prev, weekNum];
      try { localStorage.setItem("ss_completed_weeks", JSON.stringify(updated)); } catch {}
      return updated;
    });
  }

  const activeWeeks = [1,2,3,4,5,6,7,8].filter(w => !completedWeeks.includes(w));

  function handleInput(idx, field, value) {
    const key = getStorageKey(activeWeek, activeDay, idx, field);
    setInputs(prev => ({ ...prev, [key]: value }));
    saveToStorage(key, value);
  }

  function getInput(idx, field) {
    const key = getStorageKey(activeWeek, activeDay, idx, field);
    if (inputs[key] !== undefined) return inputs[key];
    return loadFromStorage(key);
  }

  function handleSave(idx, exercise) {
    const carga = getInput(idx, "carga");
    if (carga) {
      saveHistory(exercise.name, activeWeek, activeDay, carga, "");
      setSavedFlash(idx);
      setTimeout(() => setSavedFlash(null), 1500);
    }
  }

  function openHistory(exercise) {
    const history = loadHistory(exercise.name);
    setHistoryData(history);
    setHistoryModal(exercise.name);
  }

  function openProgress() {
    setView("progresso");
    const allExercises = new Set();
    Object.values(WORKOUT_DATA).forEach(w =>
      Object.values(w.days).forEach(dayExs =>
        dayExs.forEach(e => allExercises.add(e.name))
      )
    );
    setProgressExercise([...allExercises][0]);
  }

  useEffect(() => {
    if (progressExercise) {
      setProgressHistory(loadHistory(progressExercise));
    }
  }, [progressExercise]);

  const allExerciseNames = [...new Set(
    Object.values(WORKOUT_DATA).flatMap(w =>
      Object.values(w.days).flatMap(dayExs => dayExs.map(e => e.name))
    )
  )].sort();

  const NavBtn = ({ label, targetView, onClick }) => (
    <button
      onClick={onClick || (() => setView(targetView))}
      style={{
        background: view === targetView ? "#e8612a" : t.btnInactive,
        color: view === targetView ? "#fff" : t.btnInactiveText,
        border: "none", borderRadius: 8, padding: "8px 11px",
        fontSize: 11, fontWeight: 700, cursor: "pointer",
        fontFamily: "inherit", letterSpacing: 0.5, whiteSpace: "nowrap",
      }}>{label}</button>
  );

  return (
    <div style={{ minHeight: "100vh", background: t.bg, fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", color: t.text }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Bebas+Neue&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #e8e8e2; }
        ::-webkit-scrollbar-thumb { background: #e8612a; border-radius: 2px; }
        input[type=number]::-webkit-inner-spin-button { -webkit-appearance: none; }
        input { -webkit-appearance: none; }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{
        background: t.headerBg, borderBottom: `1px solid ${t.border}`,
        padding: "16px 16px 0", position: "sticky", top: 0, zIndex: 100,
        boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 26, letterSpacing: 2, color: "#e8612a", lineHeight: 1 }}>SEXY SHAPE</div>
            <div style={{ fontSize: 10, color: t.textFaint, letterSpacing: 3, textTransform: "uppercase" }}>Macro Ciclo 1</div>
          </div>
          <div style={{ display: "flex", gap: 6 }}>
            <NavBtn label="TREINO" targetView="treino" />
            <NavBtn label="CONCLUÍDAS" targetView="concluidas" />
            <NavBtn label="EVOLUÇÃO" targetView="progresso" onClick={openProgress} />
          </div>
        </div>

        {view === "treino" && (
          <>
            {/* Week pills — only active weeks */}
            <div style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 10, scrollbarWidth: "none" }}>
              {activeWeeks.length === 0
                ? <div style={{ fontSize: 13, color: t.textFaint, padding: "6px 0" }}>🎉 Todas as semanas concluídas!</div>
                : activeWeeks.map(w => (
                  <button key={w} onClick={() => setActiveWeek(w)} style={{
                    flexShrink: 0,
                    background: activeWeek === w ? "#e8612a" : t.btnInactive,
                    color: activeWeek === w ? "#fff" : t.btnInactiveText,
                    border: activeWeek === w ? "none" : `1px solid ${t.btnInactiveBorder}`,
                    borderRadius: 8, padding: "6px 14px",
                    fontSize: 13, fontWeight: 700, cursor: "pointer",
                    fontFamily: "inherit", transition: "all 0.15s",
                  }}>S{w}</button>
                ))
              }
            </div>

            {/* Day pills */}
            <div style={{ display: "flex", gap: 4, overflowX: "auto", paddingBottom: 12, scrollbarWidth: "none" }}>
              {DAYS.map(d => {
                const isActive = activeDay === d;
                const hasCarga = (WORKOUT_DATA[activeWeek]?.days[d] || []).some((ex, idx) =>
                  ex.name !== "Sprint" && loadFromStorage(getStorageKey(activeWeek, d, idx, "carga")) !== ""
                );
                return (
                  <button key={d} onClick={() => setActiveDay(d)} style={{
                    flexShrink: 0, position: "relative",
                    background: isActive ? "#111111" : t.btnInactive,
                    color: isActive ? "#ffffff" : t.btnInactiveText,
                    border: isActive ? "none" : `1px solid ${t.btnInactiveBorder}`,
                    borderRadius: 8, padding: "5px 12px",
                    fontSize: 12, fontWeight: 600, cursor: "pointer",
                    fontFamily: "inherit", transition: "all 0.15s",
                  }}>
                    {d}
                    {hasCarga && !isActive && (
                      <span style={{
                        position: "absolute", top: 3, right: 3,
                        width: 5, height: 5, borderRadius: "50%", background: "#e8612a",
                      }} />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* ── MAIN CONTENT ── */}
      <div style={{ padding: "16px", maxWidth: 600, margin: "0 auto" }}>

        {/* TREINO */}
        {view === "treino" && (
          <>
            <div style={{ marginBottom: 16 }}>
              <div style={{ fontFamily: "'Bebas Neue'", fontSize: 34, letterSpacing: 2, color: t.text, lineHeight: 1 }}>
                {activeDay.toUpperCase()}
              </div>
              <div style={{ color: t.textFaint, fontSize: 12, marginTop: 2 }}>
                {exercises.length} exercícios · Semana {activeWeek}
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {exercises.map((ex, idx) => {
                const isSprint = ex.name === "Sprint";
                const saved = getInput(idx, "carga");
                return (
                  <div key={idx} style={{
                    background: isSprint ? t.cardBgAlt : t.cardBg,
                    border: `1px solid ${isSprint ? t.borderAlt : t.border}`,
                    borderRadius: 12, padding: isSprint ? "12px 16px" : "14px 16px",
                    position: "relative", overflow: "hidden",
                    boxShadow: isSprint ? "none" : "0 1px 4px rgba(0,0,0,0.05)",
                  }}>
                    {!isSprint && <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: "#e8612a", borderRadius: "3px 0 0 3px" }} />}

                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: isSprint ? 0 : 12 }}>
                      <div style={{ flex: 1, paddingLeft: isSprint ? 0 : 6 }}>
                        <div style={{ fontWeight: 600, fontSize: 14, color: isSprint ? t.textFaint : t.text }}>
                          {ex.name}
                        </div>
                        <div style={{ display: "flex", gap: 6, marginTop: 4, flexWrap: "wrap" }}>
                          <span style={{ background: t.tagBg, color: t.textMuted, fontSize: 11, padding: "2px 8px", borderRadius: 4, fontWeight: 600 }}>
                            {ex.series} séries
                          </span>
                          {ex.tecnica && (
                            <span style={{ background: t.tagOrangeBg, color: "#c94e1e", fontSize: 11, padding: "2px 8px", borderRadius: 4, fontWeight: 500 }}>
                              {ex.tecnica}
                            </span>
                          )}
                        </div>
                      </div>
                      {!isSprint && (
                        <button onClick={() => openHistory(ex)} style={{
                          background: t.histBtnBg, border: `1px solid ${t.inputBorder}`,
                          color: t.textFaint, borderRadius: 6, padding: "4px 8px",
                          fontSize: 11, cursor: "pointer", fontFamily: "inherit", flexShrink: 0, marginLeft: 8,
                        }}>📊 hist.</button>
                      )}
                    </div>

                    {!isSprint && (
                      <div style={{ display: "flex", gap: 8, alignItems: "flex-end", paddingLeft: 6 }}>
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 10, color: t.textFaint, marginBottom: 4, letterSpacing: 1, textTransform: "uppercase" }}>Carga (kg)</div>
                          <input
                            type="number"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            placeholder="0"
                            value={getInput(idx, "carga")}
                            onChange={e => handleInput(idx, "carga", e.target.value)}
                            style={{
                              width: "100%", background: t.inputBg,
                              border: `1px solid ${t.inputBorder}`, borderRadius: 8,
                              color: t.text, padding: "10px 12px",
                              fontSize: 22, fontWeight: 700, outline: "none", fontFamily: "inherit",
                            }}
                          />
                        </div>
                        <button onClick={() => handleSave(idx, ex)} style={{
                          background: savedFlash === idx ? "#2a7a2a" : "#e8612a",
                          border: "none", borderRadius: 8, color: "#fff",
                          padding: "11px 16px", fontSize: 18, cursor: "pointer",
                          transition: "background 0.3s", flexShrink: 0,
                        }}>
                          {savedFlash === idx ? "✓" : "💾"}
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* CONCLUÍDAS */}
        {view === "concluidas" && (
          <div>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 34, letterSpacing: 2, marginBottom: 4, color: t.text }}>SEMANAS CONCLUÍDAS</div>
            <div style={{ fontSize: 12, color: t.textFaint, marginBottom: 20 }}>{completedWeeks.length} de 8 semanas finalizadas</div>

            {completedWeeks.length === 0 ? (
              <div style={{ textAlign: "center", padding: "50px 0", color: t.textFaint }}>
                <div style={{ fontSize: 44, marginBottom: 10 }}>🏋️</div>
                <div style={{ fontWeight: 600, fontSize: 15, color: t.textMuted }}>Nenhuma semana concluída ainda.</div>
                <div style={{ fontSize: 13, marginTop: 6 }}>Complete Segunda a Sábado para aparecer aqui!</div>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {completedWeeks.map(w => (
                  <div key={w} style={{
                    background: t.cardBg, border: `1px solid ${t.border}`,
                    borderRadius: 14, padding: "16px 18px",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                      <div style={{
                        width: 46, height: 46, borderRadius: 10, background: "#e8612a",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: "'Bebas Neue'", fontSize: 20, color: "#fff", letterSpacing: 1,
                      }}>S{w}</div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: 15 }}>Semana {w}</div>
                        <div style={{ fontSize: 12, color: t.textFaint, marginTop: 2 }}>
                          {DAYS.length} dias · {Object.values(WORKOUT_DATA[w].days).reduce((a, d) => a + d.filter(e => e.name !== "Sprint").length, 0)} exercícios
                        </div>
                      </div>
                    </div>
                    <button
                    onClick={() => toggleWeekCompleted(w)}
                    style={{
                      background: "#e8612a", border: "none", borderRadius: 8,
                      color: "#fff", padding: "8px 14px", fontSize: 12,
                      fontWeight: 700, cursor: "pointer", fontFamily: "inherit",
                      whiteSpace: "nowrap",
                    }}>✓ Desmarcar</button>
                  </div>
                ))}
              </div>
            )}

            {activeWeeks.length > 0 && (
              <div style={{ marginTop: 28 }}>
                <div style={{ fontSize: 11, color: t.textFaint, letterSpacing: 2, textTransform: "uppercase", marginBottom: 10 }}>Em andamento</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {activeWeeks.map(w => (
                    <div key={w} style={{
                      background: t.cardBgAlt, border: `1px solid ${t.borderAlt}`,
                      borderRadius: 12, padding: "12px 16px",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{
                          width: 38, height: 38, borderRadius: 8, background: t.tagBg,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontFamily: "'Bebas Neue'", fontSize: 17, color: t.textMuted,
                        }}>S{w}</div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: t.textMuted }}>Semana {w}</div>
                      </div>
                      <button
                        onClick={() => toggleWeekCompleted(w)}
                        style={{
                          background: t.tagBg, border: `1px solid ${t.btnInactiveBorder}`,
                          borderRadius: 8, color: t.textMuted, padding: "7px 12px",
                          fontSize: 12, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                        }}>Marcar ✓</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* EVOLUÇÃO */}
        {view === "progresso" && (
          <div>
            <div style={{ fontFamily: "'Bebas Neue'", fontSize: 34, letterSpacing: 2, marginBottom: 16, color: t.text }}>EVOLUÇÃO DE CARGA</div>

            <div style={{ marginBottom: 16 }}>
              <div style={{ fontSize: 11, color: t.textFaint, marginBottom: 6, letterSpacing: 1, textTransform: "uppercase" }}>Exercício</div>
              <select value={progressExercise} onChange={e => setProgressExercise(e.target.value)} style={{
                width: "100%", background: t.selectBg, border: `1px solid ${t.border}`,
                borderRadius: 8, color: t.text, padding: "12px 14px",
                fontSize: 14, outline: "none", fontFamily: "inherit", appearance: "none",
              }}>
                {allExerciseNames.map(name => <option key={name} value={name}>{name}</option>)}
              </select>
            </div>

            {progressHistory.length === 0 ? (
              <div style={{ textAlign: "center", padding: "40px 0", color: t.textFaint }}>
                <div style={{ fontSize: 40, marginBottom: 8 }}>📊</div>
                <div>Nenhum registro ainda para este exercício.</div>
                <div style={{ fontSize: 12, marginTop: 4 }}>Salve um treino primeiro!</div>
              </div>
            ) : (
              <>
                <div style={{ background: t.cardBg, border: `1px solid ${t.border}`, borderRadius: 12, padding: 16, marginBottom: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                  <div style={{ fontSize: 11, color: t.textFaint, marginBottom: 12, letterSpacing: 1, textTransform: "uppercase" }}>Progressão de carga (kg)</div>
                  <div style={{ display: "flex", alignItems: "flex-end", gap: 4, height: 80 }}>
                    {progressHistory.filter(h => h.carga).map((h, i) => {
                      const maxCarga = Math.max(...progressHistory.filter(x => x.carga).map(x => parseFloat(x.carga) || 0));
                      const pct = maxCarga > 0 ? (parseFloat(h.carga) / maxCarga) : 0;
                      return (
                        <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                          <div style={{ fontSize: 9, color: "#e8612a", fontWeight: 700 }}>{h.carga}</div>
                          <div style={{ width: "100%", background: "#e8612a", height: `${Math.max(4, pct * 60)}px`, borderRadius: "3px 3px 0 0", opacity: 0.6 + pct * 0.4 }} />
                          <div style={{ fontSize: 9, color: t.textFaint }}>S{h.week}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {[...progressHistory].reverse().map((h, i) => (
                    <div key={i} style={{
                      background: t.cardBg, border: `1px solid ${t.border}`,
                      borderRadius: 10, padding: "12px 16px",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                    }}>
                      <div>
                        <div style={{ fontSize: 12, color: t.textMuted }}>Semana {h.week} · {h.day}</div>
                        <div style={{ fontSize: 11, color: t.textFaint, marginTop: 2 }}>{h.date}</div>
                      </div>
                      {h.carga && (
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontSize: 22, fontWeight: 700, color: "#e8612a", lineHeight: 1 }}>{h.carga}</div>
                          <div style={{ fontSize: 10, color: t.textFaint }}>kg</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </div>

      {/* ── HISTORY MODAL ── */}
      {historyModal && (
        <div onClick={() => setHistoryModal(null)} style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.4)",
          zIndex: 200, display: "flex", alignItems: "flex-end",
        }}>
          <div onClick={e => e.stopPropagation()} style={{
            background: t.modalBg, borderRadius: "20px 20px 0 0",
            padding: 20, width: "100%", maxHeight: "70vh", overflowY: "auto",
            border: `1px solid ${t.border}`, boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <div>
                <div style={{ fontFamily: "'Bebas Neue'", fontSize: 22, color: "#e8612a", letterSpacing: 1 }}>HISTÓRICO</div>
                <div style={{ fontSize: 13, color: t.textMuted, marginTop: 2 }}>{historyModal}</div>
              </div>
              <button onClick={() => setHistoryModal(null)} style={{
                background: t.tagBg, border: "none", color: t.textMuted,
                borderRadius: 8, padding: "6px 12px", cursor: "pointer", fontFamily: "inherit",
              }}>✕</button>
            </div>
            {historyData.length === 0 ? (
              <div style={{ textAlign: "center", padding: 30, color: t.textFaint }}>Nenhum registro ainda.</div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[...historyData].reverse().map((h, i) => (
                  <div key={i} style={{
                    background: t.modalCardBg, borderRadius: 10, padding: "12px 14px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    border: `1px solid ${t.border}`,
                  }}>
                    <div>
                      <div style={{ fontSize: 12, color: t.textMuted }}>Sem. {h.week} · {h.day}</div>
                      <div style={{ fontSize: 11, color: t.textFaint }}>{h.date}</div>
                    </div>
                    {h.carga && (
                      <div>
                        <span style={{ fontSize: 18, fontWeight: 700, color: "#e8612a" }}>{h.carga}</span>
                        <span style={{ fontSize: 10, color: t.textFaint }}> kg</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
