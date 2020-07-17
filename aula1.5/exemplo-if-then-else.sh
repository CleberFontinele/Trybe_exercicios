#!/bin/bash

echo "Qual sua idade?"
read IDADE
if [  $IDADE -ge " 18 " ]
then
echo "você é maior de idade"
else
echo "você é menor de idade"
fi