  #!/usr/bin bash
  # Eu sou Tryber e...

 #Vou ter muito sucesso na programação!

  

                   #SHELL SCRIPT AULA 1.5
  # exercicio-1
 
# echo "Shell script"

#exercicio-2
# VARIAVEL="shell script com variaveis é demais"
# echo $VARIAVEL

#exercicio-3
# HOST=`hostname`
# echo "este script esta rodando no computador:" $HOST 

#exercicio-4
# FILE="/Cleber"
# if [ -e "$FILE" ]
#     then
#         echo "O caminho $FILE esta habilitado"
# fi 
# if [ -w "$FILE" ]
# then
#     echo "Voce tem permissão para editar $FILE"
# else
#     echo "Voce não tem permissão para editar $FILE"
# fi

#exercicio-5
# echo "Digite o caminho de um arquivo ou diretorio"
# read FILE
# if [ -f "$FILE" ]
#     then
#         echo "$FILE é um arquivo comum"
# elif [ -d "$FILE" ]
#     then
# echo "$FILE é um diretorio"
#     else
# echo "$FILE outra coisa"
#     fi
# ls -l $FILE

# exercicio-6
# if [ -f $1 ]
# then 
#     echo "Arquivo Comum $1"
#     # ls -l $1
# elif [ -d $1 ]
# then
#     echo "Diretorio $1"
#     # ls -l $1
# else
#     echo "Outro tipo de arquivo $1"
# fi

# exercicio-7
# DIRECTORY=$1
# if [ -d "$DIRECTORY" ]
#   then
#     FILES=`ls -l $DIRECTORY | wc -l`
#     echo "O $DIRECTORY tem $FILES arquivos."
# else
#     echo "O argumento $DIRECTORY não é um diretório!"
# fi
  
