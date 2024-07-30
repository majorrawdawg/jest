
# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<

export PATH=$PATH:/opt/homebrew/bin/npm

export PATH=/opt/homebrew/bin:$PATH
export PATH=/opt/homebrew/opt/openjdk@17/bin:$PATH
export MAVEN_HOME=/opt/homebrew/Cellar/maven/3.9.8/libexec
export JAVA_HOME=$(/usr/libexec/java_home)
export CPPFLAGS="-I/opt/homebrew/opt/openjdk@17/include"
