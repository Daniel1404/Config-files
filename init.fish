
###############################################
### init.fish CONFIGURATION FILE OF DANIEL DIAZ ###
#
#  ____   ____
# |  _ \ |  _ \   Copyright (c) 2020 Daniel Diaz
# | | | || | | |
# | |_| || |_| |  http://www.github.com/Daniel1404/
# |____/ |____/
#

set fish_greeting #Supress annoying message
set TERM "termite"
set EDITOR "emacs"

# Set OMF_CONFIG if not set.
if not set -q OMF_CONFIG
  set -q XDG_CONFIG_HOME; or set -l XDG_CONFIG_HOME "$HOME/.config"
  set -gx OMF_CONFIG "$XDG_CONFIG_HOME/omf"
end
# Source custom before.init.fish file
test -f $OMF_CONFIG/before.init.fish
  and source $OMF_CONFIG/before.init.fish 2> /dev/null
emit perf:timer:start "Oh My Fish initialisation"
# Read current theme
test -f $OMF_CONFIG/theme
  and read -l theme < $OMF_CONFIG/theme
  or set -l theme default
# Prepare Oh My Fish paths
set -l core_function_path $OMF_PATH/lib{,/git}
set -l theme_function_path {$OMF_CONFIG,$OMF_PATH}/themes*/$theme{,/functions}
# Autoload core library
set fish_function_path $fish_function_path[1] \
                       $core_function_path \
                       $theme_function_path \
                       $fish_function_path[2..-1]
# Require all packages
emit perf:timer:start "Oh My Fish init installed packages"
require --path {$OMF_PATH,$OMF_CONFIG}/pkg/*
emit perf:timer:finish "Oh My Fish init installed packages"
# Backup key bindings
functions -q fish_user_key_bindings
  and not functions -q __original_fish_user_key_bindings
  and functions -c fish_user_key_bindings __original_fish_user_key_bindings
# Override key bindings, calling original if existent
function fish_user_key_bindings
  test -f $OMF_CONFIG/theme
    and read -l theme < $OMF_CONFIG/theme
    or set -l theme default
  test -e $OMF_CONFIG/key_bindings.fish;
    and source $OMF_CONFIG/key_bindings.fish
  # Prepare packages key bindings paths
  set -l key_bindings {$OMF_CONFIG,$OMF_PATH}/pkg/*/key_bindings.fish \
                      {$OMF_CONFIG,$OMF_PATH}/themes*/$theme/key_bindings.fish
  # Source all keybindings collected
  for file in $key_bindings
    source $file
  end
  # Call original key bindings if existent
  functions -q __original_fish_user_key_bindings
    and __original_fish_user_key_bindings
end
emit perf:timer:start "Oh My Fish init user config path"
require --no-bundle --path $OMF_CONFIG
emit perf:timer:finish "Oh My Fish init user config path"
# Load conf.d for current theme if exists
set -l theme_conf_path {$OMF_CONFIG,$OMF_PATH}/themes*/$theme/conf.d
for conf in $theme_conf_path/*.fish
  source $conf
end
emit perf:timer:finish "Oh My Fish initialisation"

# PATH
set PATH ~/.emacs.d/bin $PATH

# aliases:

# git
alias g="git"
alias gst="git status"
alias gc="git clone"
alias gcm="git commit -m"
alias grc="git rm -r --cached"
alias gph="git push origin" 
alias config="/usr/bin/git --git-dir=$HOME/.config-files/ --work-tree=$HOME" # Turns my home in a git repo
alias ginit="git init;touch README.md; git add README.md;git commit -m 'first commit';git branch -M main"

function gremote -a repo
        command git remote add origin git@github.com:Daniel1404/$repo.git
    end
# cd commands

alias ..="cd .."
alias ...="cd ../.."
alias 3..="cd ../../.."

# cp commands
alias cp="cp -r" # set cp to allways copy directories

# Development

alias p="python3"
alias cl="clear"
alias cdM="cd ~/MEGA/"
alias cdMG="cd /home/daniel/MEGA/my-git/github"

# installing packages

alias install="sudo pacman -S" # install any pagckage
alias search="pacman -Ss" # Search for a package
alias sync="pacman -Syy" # sync the repos
alias update="sudo pacman -Syu" # Update the system, but not AUR
alias onlyAUR="yay -Sua --noconfirm" # Update onlyAUR

# Other aliases 
# Emacs

alias em="/usr/bin/emacs -nw" # for terminal
alias emacs="emacsclient -c -a 'emacs'" # For an instance

# Aliases for Qtile
alias qtile_log="cd ~/.local/share/qtile; bat qtile.log"
alias qtile_server="Xephyr -br -ac -noreset -screen 1000x700 :1 & DISPLAY=:1 qtile"

