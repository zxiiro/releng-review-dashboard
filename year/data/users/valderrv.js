userdata['valderrv'] = {
  "identity": ids["valderrv"],
  "reviewCountPlus2": 2,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1522178030000,
  "lastActiveDate": 1529935650000,
  "activeDayCount": 5,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400",
      "commitNumber": 10236,
      "subject": "Add pipefail",
      "owner": ids["valderrv"],
      "url": "https://gerrit.linuxfoundation.org/infra/10236",
      "commitMessage": "Add pipefail\n\nIf the SET_JDK_VERSION is not set the script still runs but doesn\u0027t\nconfigure JAVA_HOME properly. This change foreces the script to fail if\nSET_JDK_VERSION is not set.\n\nChange-Id: Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524685518000,
      "lastUpdatedDate": 1529935650000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agardner"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1524685518000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524685958000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/"
        },
        {
          "timestamp": 1524686194000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/393"
        },
        {
          "timestamp": 1524689275000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 1: Code-Review+1\n\n(1 comment)\n\nI have no problem with setting to \u0027strict mode\u0027 but the patch titled pipe-fail and only -u is needed for this case."
        },
        {
          "timestamp": 1524694918000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1524694970000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/"
        },
        {
          "timestamp": 1524695120000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/394"
        },
        {
          "timestamp": 1525103948000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review-1\n\nI think this is good, but I\u0027m slightly worried that we may be introducing a change that requires updates to jobs. Please add a note to the release notes stating that java-version must get set either globally or at the job level!"
        },
        {
          "timestamp": 1529935650000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\nI think this change won\u0027t resolve what the commit description describes. SET_JDK_VERSION appears to have a default version defined in the scripts so the script will always successfully run.\n\nWe need to probably pass a non-valid option to SET_JDK_VERSION and check if it\u0027s set and make a decision to exit out of the script based on that logic."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3513473d69aadd89f346f7aaf0a81de97b1d0f9c",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/36/10236/1",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524685518000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1524689275000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524686194000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/update-java-alternatives.sh",
              "line": 20,
              "reviewer": ids["agardner"],
              "message": "Only the set -u (nounset) is needed to exit on undeclared variables.",
              "patchSetTimestamp": 1524685518000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "6c105240553a72ddc77ee21329d0dc1f53b27000",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/36/10236/2",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524694918000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525103948000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1529935650000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524695120000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If2edba598b47484b1708f1e0f3fb96f035511841",
      "commitNumber": 10212,
      "subject": "Configure tox tests allow serial execution",
      "owner": ids["valderrv"],
      "url": "https://gerrit.linuxfoundation.org/infra/10212",
      "commitMessage": "Configure tox tests allow serial execution\n\nConfiguring tox tests to allow serial or parallel execution configurable\nwithin JJB by setting the PARALLEL parameter to true or false.\n\nIssue: RELENG-912\nChange-Id: If2edba598b47484b1708f1e0f3fb96f035511841\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524600060000,
      "lastUpdatedDate": 1529674103000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["valderrv"],
        ids["lf-jenkins"],
        ids["agardner"],
        ids["bramwelt"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1524600060000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524600097000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 1: Code-Review-2\n\nThis change is a work in progress and not ready for review."
        },
        {
          "timestamp": 1524602508000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1524602980000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1524603019000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 1: -Code-Review"
        },
        {
          "timestamp": 1524603099000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/"
        },
        {
          "timestamp": 1524603270000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/387"
        },
        {
          "timestamp": 1524604140000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 2: -Code-Review"
        },
        {
          "timestamp": 1524608140000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review-1\n\n(2 comments)\n\n@Vaness not sure if you\u0027re ready for review since you removed the code-review vote but the code hasn\u0027t changed since patchset 1. The current patch seems incomplete and does not seem to tie into JJB. We need to add the parallel parameter to the JJB side of the code."
        },
        {
          "timestamp": 1524676208000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1524676422000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/"
        },
        {
          "timestamp": 1524676582000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/391"
        },
        {
          "timestamp": 1524676819000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1524677041000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/"
        },
        {
          "timestamp": 1524677246000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/392"
        },
        {
          "timestamp": 1524690472000,
          "reviewer": ids["agardner"],
          "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1524769528000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1524769582000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/"
        },
        {
          "timestamp": 1524769795000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/395"
        },
        {
          "timestamp": 1524770305000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 5:\n\n(1 comment)\n\nHave you added a \u0027PARALLEL\u0027 parameter to the job config?"
        },
        {
          "timestamp": 1524770656000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 5:\n\n(1 comment)\n\nI added the PARALLEL parameter to lf-python-jobs.yaml"
        },
        {
          "timestamp": 1524841616000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1524845730000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\n(1 comment)"
        },
        {
          "timestamp": 1524849280000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1524849440000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/"
        },
        {
          "timestamp": 1524849609000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/398"
        },
        {
          "timestamp": 1525094161000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review-1\n\n(1 comment)\n\nPlease link to a sandbox test showing the parallel parameter working."
        },
        {
          "timestamp": 1525122146000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1525122163000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 7: Code-Review-1\n\ntesting on the sandbox"
        },
        {
          "timestamp": 1525122321000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/"
        },
        {
          "timestamp": 1525122520000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/402"
        },
        {
          "timestamp": 1525204095000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 7: -Code-Review\n\nSandbox link:  https://jenkins.acumos.org/sandbox/job/acumos-python-client-tox-verify-master/\n\nTests include:\nNot setting parallel\nparallel\u003dtrue\nparallel\u003dfalse"
        },
        {
          "timestamp": 1525207059000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review+1\n\nLooks good, thanks!"
        },
        {
          "timestamp": 1525288676000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525289434000,
          "reviewer": ids["valderrv"],
          "message": "Uploaded patch set 8: Commit message was updated."
        },
        {
          "timestamp": 1525289453000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 8: Code-Review+2"
        },
        {
          "timestamp": 1525289513000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+1"
        },
        {
          "timestamp": 1525289691000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/"
        },
        {
          "timestamp": 1525289842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/403"
        },
        {
          "timestamp": 1525305799000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1529674103000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8:\n\nDoh, just realized this patch causes a bug described here: RELENG-1042\n\nworking on a fix now..."
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "8734c3d3bf13e7de97ac369523ad0d4dd4802338",
          "parents": [
            "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
          ],
          "ref": "refs/changes/12/10212/1",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524600060000,
          "author": ids["valderrv"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["zxiiro"],
              "message": "Just above the Change-Id line add:\n\n Issue: RELENG-912\n\nThis way we can reference back to the Jira if needed.",
              "patchSetTimestamp": 1524600060000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -6
        },
        {
          "number": 2,
          "revision": "8681d951bb1ed9f942bb148f5b7647a1a3e9394c",
          "parents": [
            "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
          ],
          "ref": "refs/changes/12/10212/2",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524602980000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524608140000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1524603270000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/tox-run.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "This needs to be hooked into JJB.",
              "patchSetTimestamp": 1524602980000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 40,
              "reviewer": ids["zxiiro"],
              "message": "We should probably rename detox_status to just tox_status so that the test at the bottom of this script can parse both tox and detox statuses.",
              "patchSetTimestamp": 1524602980000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -6
        },
        {
          "number": 3,
          "revision": "f19eb7370a39105f24648a1d243e7bcc652b3f25",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/3",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524676208000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1524676582000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 21,
          "sizeDeletions": -6
        },
        {
          "number": 4,
          "revision": "79a482599e716ded98735bc9e0a19d1abd8fbe0c",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/4",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524676819000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524690472000,
              "grantedBy": ids["agardner"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524677246000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/tox-run.sh",
              "line": 32,
              "reviewer": ids["agardner"],
              "message": "why is this set? also, perhaps catch if PARALLEL is unset set to false.",
              "patchSetTimestamp": 1524676819000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 32,
              "reviewer": ids["zxiiro"],
              "message": "PARALLEL\u003d\"${PARALLEL:-true}\"",
              "patchSetTimestamp": 1524676819000
            }
          ],
          "sizeInsertions": 22,
          "sizeDeletions": -7
        },
        {
          "number": 5,
          "revision": "2192111889305dd00fa7d0f9bbcee00eebcd5360",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/5",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524769528000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1524841616000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524769795000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 101,
              "reviewer": ids["zxiiro"],
              "message": "I think you meant to put this in the tox job configuration. This here is applying it to the \"CLM\" job not tox.\n\nAlso you need to add a string parameter in the \"parameters:\" section of JJB for Jenkins to add an actual parameter. The definition here purely is to tell JJB what variable \"parallel\" should be set to by default if the user does not provide on. We still need to define the parameter itself.",
              "patchSetTimestamp": 1524769528000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 52,
              "reviewer": ids["bramwelt"],
              "message": "Since the default has been to run tox in parallel, instead of checking if Parallel is unset, it can always default to true \"PARALLEL\u003d${PARALLEL:-true}\".",
              "patchSetTimestamp": 1524769528000
            },
            {
              "file": "shell/tox-run.sh",
              "line": 52,
              "reviewer": ids["valderrv"],
              "message": "I changed the patch to catch if PARALLEL is unset set to false based on a previous review.",
              "patchSetTimestamp": 1524769528000
            }
          ],
          "sizeInsertions": 23,
          "sizeDeletions": -7
        },
        {
          "number": 6,
          "revision": "39be1026ce4511f78351a77e7f7a94be4f71806c",
          "parents": [
            "cb633b472a2e7a814b24071299d2cde41247f1df"
          ],
          "ref": "refs/changes/12/10212/6",
          "uploader": ids["valderrv"],
          "createdOnDate": 1524849280000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525094161000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524849609000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 447,
              "reviewer": ids["zxiiro"],
              "message": "parallel is not a valid parameter of the git-scm plugin:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/scm.html\n\nThis is not what we need here though. What we to do is define a environment variable that Jenkins passes to the bash script. To do that we need to declare a Jenkins Parameter. You can do that using the \"string\" parameter in JJB:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/parameters.html\n\nWe have a few examples of this in global-jjb for example in the Python CLM job:\n\nhttps://github.com/lfit/releng-global-jjb/blob/master/jjb/lf-python-jobs.yaml#L110-L114",
              "patchSetTimestamp": 1524849280000
            }
          ],
          "sizeInsertions": 20,
          "sizeDeletions": -6
        },
        {
          "number": 7,
          "revision": "61a01a9ce259bafec0045901b3c91788c05ea236",
          "parents": [
            "35adc33717a2a9ca867c5a624904a963d8449ae6"
          ],
          "ref": "refs/changes/12/10212/7",
          "uploader": ids["valderrv"],
          "createdOnDate": 1525122146000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525288676000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525207059000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525122520000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["agrimberg"],
              "message": "This really should be\n\nIssue: RELENG-912\n\nI don\u0027t like seeing non-annotated footer meta-data",
              "patchSetTimestamp": 1525122146000
            }
          ],
          "sizeInsertions": 27,
          "sizeDeletions": -6
        },
        {
          "number": 8,
          "revision": "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02",
          "parents": [
            "35adc33717a2a9ca867c5a624904a963d8449ae6"
          ],
          "ref": "refs/changes/12/10212/8",
          "uploader": ids["valderrv"],
          "createdOnDate": 1525289434000,
          "author": ids["valderrv"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525289453000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525305799000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525289513000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525289842000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 27,
          "sizeDeletions": -6
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/lftools",
      "branch": "master",
      "id": "I9a32c48ddd5ee2898816db7faaeb0de805a38b3c",
      "commitNumber": 10205,
      "subject": "Remove trailing slashes in nexus_url",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10205",
      "commitMessage": "Remove trailing slashes in nexus_url\n\nlftools should not fail if the user passes extra trailing slashes that\nthe command was not expecting.\n\nChange-Id: I9a32c48ddd5ee2898816db7faaeb0de805a38b3c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1524588876000,
      "lastUpdatedDate": 1524633901000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["askb"],
        ids["valderrv"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1524588876000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1524588893000,
          "reviewer": ids["zxiiro"],
          "message": "Assignee added: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e"
        },
        {
          "timestamp": 1524589056000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1524590561000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/84/"
        },
        {
          "timestamp": 1524590794000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-lftools-tox-verify-any/84/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-lftools-tox-verify-any/84"
        },
        {
          "timestamp": 1524633898000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1524633901000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "1a58332c9860ce30c29800ffd6e0e63edfc74bc0",
          "parents": [
            "0087ef1f22e7c233c202b18c4a63020b55eb8b96"
          ],
          "ref": "refs/changes/05/10205/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1524588876000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1524633898000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1524633901000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1524589056000,
              "grantedBy": ids["valderrv"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1524590794000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iffebd2b7e6b282d3e17a7bd6de1452e063f64603",
      "commitNumber": 11786,
      "subject": "Set Packer Image name as Build Description",
      "owner": ids["bramwelt"],
      "url": "https://gerrit.linuxfoundation.org/infra/11786",
      "commitMessage": "Set Packer Image name as Build Description\n\nWith the Build Description Setter plugin installed in Jenkins, the\npacker image name can be extracted after a successful build.\n\nThis allows users to no longer look through the build logs when trying\nto find the image name for builds.\n\nIssue: RELENG-1073\n\nChange-Id: Iffebd2b7e6b282d3e17a7bd6de1452e063f64603\nSigned-off-by: Trevor Bramwell \u003ctbramwell@linuxfoundation.org\u003e\n",
      "createdOnDate": 1531523458000,
      "lastUpdatedDate": 1531754529000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["valderrv"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["bramwelttest"],
        ids["tijohnson"]
      ],
      "comments": [
        {
          "timestamp": 1531523458000,
          "reviewer": ids["bramwelt"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1531523639000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/644/"
        },
        {
          "timestamp": 1531523807000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/644/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/644"
        },
        {
          "timestamp": 1531524141000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+1\n\nDefinitely like it..would require that folks install this plugin before using this JJB so wanna get more approvals."
        },
        {
          "timestamp": 1531536889000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1531754529000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n(2 comments)\n\nThis needs testing somewhere"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "59810b49ca6f23d550c7a467d07da04d9aab2e0c",
          "parents": [
            "9edb84822a5ec8c646fb39780cd1f4f57537a648"
          ],
          "ref": "refs/changes/86/11786/1",
          "uploader": ids["bramwelt"],
          "createdOnDate": 1531523458000,
          "author": ids["bramwelt"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1531754529000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1531524141000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1531523807000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 15,
              "reviewer": ids["agrimberg"],
              "message": "As Thanh mentions, this needs to be moved down so that it\u0027s part of the footer, not floating as part of the message body!",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 16,
              "reviewer": ids["zxiiro"],
              "message": "Move Issue: down one so that it\u0027s attached to the footer.",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 962,
              "reviewer": ids["zxiiro"],
              "message": "I think this will conflict with the publisher that also writes stuff to the build description. I wonder if we can append somehow.",
              "patchSetTimestamp": 1531523458000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 962,
              "reviewer": ids["agrimberg"],
              "message": "I think you\u0027re correct that it\u0027s going to conflict with our current use in the lf-infra-ship-logs.\n\n@Trevor can you please verify in a sandbox if we end up with a single one of these defined or if JJB is managing to insert 2 description setters because it\u0027s coming in via XML and both actually work then?",
              "patchSetTimestamp": 1531523458000
            }
          ],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia24912694223d4e8df81f591829dfb4b4ed5ff22",
      "commitNumber": 10933,
      "subject": "Release global-jjb v0.20.0",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10933",
      "commitMessage": "Release global-jjb v0.20.0\n\nChange-Id: Ia24912694223d4e8df81f591829dfb4b4ed5ff22\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1527873563000,
      "lastUpdatedDate": 1528149337000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["agrimberg"],
        ids["agardner"],
        ids["bramwelt"],
        ids["askb"],
        ids["valderrv"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["jluhrsen"],
        ids["cl778h"],
        ids["fdegir"]
      ],
      "comments": [
        {
          "timestamp": 1527873563000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1527873584000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-2\n\nPlease review, but hold off releasing until Monday."
        },
        {
          "timestamp": 1527873744000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/474/"
        },
        {
          "timestamp": 1527873937000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/474/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/474"
        },
        {
          "timestamp": 1527994200000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1527994303000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/483/"
        },
        {
          "timestamp": 1527994423000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/483/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/483"
        },
        {
          "timestamp": 1528124964000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1528124970000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1528125033000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/488/ (1/2)"
        },
        {
          "timestamp": 1528125078000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/192/ (2/2)"
        },
        {
          "timestamp": 1528125192000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/488/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/488\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/192/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/192"
        },
        {
          "timestamp": 1528127445000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1528127508000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1528127659000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(2 comments)"
        },
        {
          "timestamp": 1528127837000,
          "reviewer": ids["bramwelt"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1528127953000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        },
        {
          "timestamp": 1528149337000,
          "reviewer": ids["askb"],
          "message": "Patch Set 3: Code-Review+1"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b64773220f85432331861c22bb4e20052193a418",
          "parents": [
            "86e26cea99847511bc199afaf981cc41e5934d64"
          ],
          "ref": "refs/changes/33/10933/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527873563000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1527873584000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527873937000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 46,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "c9d1ba5492e983981a4c5f3cb1b0cc13e4209345",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/33/10933/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1527994200000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1527873584000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1527994423000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 45,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "d1b7f48bb76729ddde974357b4de845db71bb5a8",
          "parents": [
            "ed23bb62a50a877c2b6b5904cc4963968f17acc3"
          ],
          "ref": "refs/changes/33/10933/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1528124964000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528124970000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1528127953000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1528127837000,
              "grantedBy": ids["bramwelt"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1528149337000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1528125192000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/conf.py",
              "line": 72,
              "reviewer": ids["bramwelt"],
              "message": "Oh, we should update global-jjb to use lfdocs-conf...just a note. This looks good though.",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "docs/conf.py",
              "line": 72,
              "reviewer": ids["zxiiro"],
              "message": "Yes, there was a problem with it though and I backed out awhile ago. I can\u0027t remember what the problem was....",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "relnotes/v0.20.0.txt",
              "line": 15,
              "reviewer": ids["bramwelt"],
              "message": "0.19.1 or .2",
              "patchSetTimestamp": 1528124964000
            },
            {
              "file": "relnotes/v0.20.0.txt",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Considering release notes were not sent out for the 0.19.2 release the change log includes everything from 0.19.0.",
              "patchSetTimestamp": 1528124964000
            }
          ],
          "sizeInsertions": 46,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ibbba26670ab374fd98e1bf20f78ffff7f8b7c52a",
      "commitNumber": 10606,
      "subject": "Add ALT_NEXUS_URL to create-netrc",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/10606",
      "commitMessage": "Add ALT_NEXUS_URL to create-netrc\n\nThis change is backwards compatible with existing system configs but\nlets the user spec this env var which will take precedence.  This is\nuseful, for example, to point at nexus3.edgexfoundry.org if you have\nNEXUS_URL\u003dnexus.edgexfoundry.org.\n\nChange-Id: Ibbba26670ab374fd98e1bf20f78ffff7f8b7c52a\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1526063663000,
      "lastUpdatedDate": 1527784231000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["bramwelt"],
        ids["valderrv"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1526063663000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526063771000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/430/ (1/2)"
        },
        {
          "timestamp": 1526063816000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/158/ (2/2)"
        },
        {
          "timestamp": 1526063956000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/430/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/430\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/158/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/158"
        },
        {
          "timestamp": 1526067273000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1526068057000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1526068106000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1526068157000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1526068161000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/431/ (1/2)"
        },
        {
          "timestamp": 1526068191000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/159/ (2/2)"
        },
        {
          "timestamp": 1526068375000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/431/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/431\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/159/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/159"
        },
        {
          "timestamp": 1526068507000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        },
        {
          "timestamp": 1527784231000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\n(1 comment)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "9a890b066d96a8c913407aa43bad367846fe1a96",
          "parents": [
            "334d6e2906736244da93122c82e8beda632c6234"
          ],
          "ref": "refs/changes/06/10606/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1526063663000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1526067273000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526063956000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 15,
              "reviewer": ids["agrimberg"],
              "message": "Interesting line breaking style. Not an issue, but doing ~50 char lines in the body seems a bit odd to me ;)",
              "patchSetTimestamp": 1526063663000
            },
            {
              "file": "/COMMIT_MSG",
              "line": 15,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1526063663000
            },
            {
              "file": "docs/jjb/lf-macros.rst",
              "line": 32,
              "reviewer": ids["agrimberg"],
              "message": "$PROJECTDOMAIN",
              "patchSetTimestamp": 1526063663000
            },
            {
              "file": "docs/jjb/lf-macros.rst",
              "line": 32,
              "reviewer": ids["jeremyphelps"],
              "message": "Done",
              "patchSetTimestamp": 1526063663000
            }
          ],
          "sizeInsertions": 16,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "f90d002be64f126671ebe3a48d9af4add1ded6c1",
          "parents": [
            "334d6e2906736244da93122c82e8beda632c6234"
          ],
          "ref": "refs/changes/06/10606/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1526068057000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1526068157000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1526068507000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526068375000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-macros.rst",
              "line": 30,
              "reviewer": ids["zxiiro"],
              "message": "Do we even need this variable? I think we could override NEXUS_URL via inject. Inject\u0027s take precedence over what\u0027s defined in global-config I think.",
              "patchSetTimestamp": 1526068057000
            }
          ],
          "sizeInsertions": 16,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I786240ab14cf95a2896d92d1c87aef9d7815d964",
      "commitNumber": 9656,
      "subject": "Update RTD to use Generic API v2 webhook",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9656",
      "commitMessage": "Update RTD to use Generic API v2 webhook\n\nThe old tokenless generic trigger url has been deprecated. Update\nto using the new v2 API that requires a token.\n\nThis is a backwards incompatible change and modifies 2 things:\n\n  * rtd-project is now the rtd-build-url parameter\n  * rtd-token is a new required parameter\n\nIssue: RELENG-879\nChange-Id: I786240ab14cf95a2896d92d1c87aef9d7815d964\nCo-Authored-By: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1522255747000,
      "lastUpdatedDate": 1523470373000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["bramwelt"],
        ids["valderrv"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1522255747000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1522255793000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\nJust a reminder for me to take a closer look at this patch. More soon."
        },
        {
          "timestamp": 1522255865000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/108/ (1/2)"
        },
        {
          "timestamp": 1522256103000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/309/ (2/2)"
        },
        {
          "timestamp": 1522256306000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/108/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/108\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/309/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/309"
        },
        {
          "timestamp": 1523317619000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1523317662000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Commit message was updated."
        },
        {
          "timestamp": 1523317677000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1523317746000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/109/ (1/2)"
        },
        {
          "timestamp": 1523317776000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/318/ (2/2)"
        },
        {
          "timestamp": 1523317787000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Commit message was updated."
        },
        {
          "timestamp": 1523317799000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1523317805000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nrecheck"
        },
        {
          "timestamp": 1523317861000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/318/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/318/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/318\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/109/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/109/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/109"
        },
        {
          "timestamp": 1523317886000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/110/ (1/2)"
        },
        {
          "timestamp": 1523317912000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5: Commit message was updated."
        },
        {
          "timestamp": 1523317926000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/319/ (2/2)"
        },
        {
          "timestamp": 1523318197000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/319/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/319/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/319\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/110/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/110"
        },
        {
          "timestamp": 1523319678000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1523319887000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1523319989000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1523414066000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1523414068000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1523414180000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/112/ (1/2)"
        },
        {
          "timestamp": 1523414219000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/328/ (2/2)"
        },
        {
          "timestamp": 1523414414000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/112/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/112\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/328/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/328"
        },
        {
          "timestamp": 1523414565000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 9."
        },
        {
          "timestamp": 1523414606000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 9: Code-Review+1\n\nFully tested on OpenDaylight Jenkins Sandbox here:\n\nhttps://jenkins.opendaylight.org/sandbox/job/integration-test-rtd-merge-fluorine/\n\nFailure and Success scenarios appear to work as expected."
        },
        {
          "timestamp": 1523414674000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/113/ (1/2)"
        },
        {
          "timestamp": 1523414704000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/329/ (2/2)"
        },
        {
          "timestamp": 1523414895000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 9: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/113/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/113\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/329/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/329"
        },
        {
          "timestamp": 1523462520000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9: Code-Review+1"
        },
        {
          "timestamp": 1523469392000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 9: Code-Review+2"
        },
        {
          "timestamp": 1523470373000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c5f456551dab5dbe0adee364a37d18ccd983c937",
          "parents": [
            "2fd4ef3727651924618efac74b88e104c858ead2"
          ],
          "ref": "refs/changes/56/9656/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1522255747000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1522255793000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522256306000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "05117dcdbb8aa2020d4b964b876a04491dc8dbbe",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/56/9656/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523317619000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "72cefb1de65e1fdbf5892f87e2cba14a58353ef4",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/56/9656/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523317662000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1523317861000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -5
        },
        {
          "number": 4,
          "revision": "0db3b951f3cc2a0f3b65161ab0155c182c0d3db8",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/56/9656/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523317787000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1523318197000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -5
        },
        {
          "number": 5,
          "revision": "9eda52db19006885d22d1bc93cfd116c1549426c",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/56/9656/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523317912000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "NO_CODE_CHANGE",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -5
        },
        {
          "number": 6,
          "revision": "da51394d097564a69b48819038c747f1042231d1",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/56/9656/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523319678000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -11
        },
        {
          "number": 7,
          "revision": "fbc0cea04f5f5c2055d46516e68ea168ea328ed1",
          "parents": [
            "7523625d22342839f99c02c0400a4b5d17252671"
          ],
          "ref": "refs/changes/56/9656/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523319887000,
          "author": ids["jeremyphelps"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523319989000,
              "grantedBy": ids["zxiiro"]
            }
          ],
          "comments": [
            {
              "file": "shell/rtd-trigger-build.sh",
              "line": 33,
              "reviewer": ids["zxiiro"],
              "message": "We need to check the returned JSON and if the build was not started fail this build. Currently even if RTD returns that the build did not start we show a successful build.",
              "patchSetTimestamp": 1523319887000
            },
            {
              "file": "shell/rtd-trigger-build.sh",
              "line": 33,
              "reviewer": ids["zxiiro"],
              "message": "Done",
              "patchSetTimestamp": 1523319887000
            }
          ],
          "sizeInsertions": 43,
          "sizeDeletions": -13
        },
        {
          "number": 8,
          "revision": "bf95bc00acf947a9fb5c759c8d019b8bbb21814c",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/56/9656/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523414066000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523414414000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 55,
          "sizeDeletions": -12
        },
        {
          "number": 9,
          "revision": "b02012806c0aae2b3dde5f5a6bba5222dc7ebc70",
          "parents": [
            "d0059ff8d3d0db756b6aa6dc07a421bfd5e29247"
          ],
          "ref": "refs/changes/56/9656/9",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1523414565000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1523414606000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1523470373000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1523469392000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1523414895000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 56,
          "sizeDeletions": -13
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I87a8f3b25ab977cdcfd3c23da6cebd610edaf325",
      "commitNumber": 9654,
      "subject": "Revert \"Update RTD to use custom trigger url\"",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9654",
      "commitMessage": "Revert \"Update RTD to use custom trigger url\"\n\nThis reverts commit 12d6179c0e7c208a360a3c61c0b715b49310b39e.\n\nChange-Id: I87a8f3b25ab977cdcfd3c23da6cebd610edaf325\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1522255252000,
      "lastUpdatedDate": 1522255622000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["valderrv"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1522255252000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1522255257000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1522255300000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1522255319000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/107/ (1/2)"
        },
        {
          "timestamp": 1522255373000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/308/ (2/2)"
        },
        {
          "timestamp": 1522255610000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/107/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/107\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/308/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/308"
        },
        {
          "timestamp": 1522255622000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7f88f16fefcfe52fbdeff14ea85c9b923fd0435e",
          "parents": [
            "12d6179c0e7c208a360a3c61c0b715b49310b39e"
          ],
          "ref": "refs/changes/54/9654/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1522255252000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1522255257000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1522255622000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1522255300000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522255610000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 3,
          "sizeDeletions": -39
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iac0774266e787705e7fb903712cbfb4b4a41fb55",
      "commitNumber": 9634,
      "subject": "Update RTD to use custom trigger url",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/9634",
      "commitMessage": "Update RTD to use custom trigger url\n\nThe generic trigger url is now deprecated.  Going forward\nusers will have to use the Generic API incoming webhook\nthat is defined per project in the read the docs service.\n\nChange-Id: Iac0774266e787705e7fb903712cbfb4b4a41fb55\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1522169263000,
      "lastUpdatedDate": 1522255252000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["jwagantall"],
        ids["jeremyphelps"],
        ids["lf-jenkins"],
        ids["valderrv"]
      ],
      "comments": [
        {
          "timestamp": 1522169263000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1522169332000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 1:\n\nFirst try, I\u0027m going to test this is sandbox now."
        },
        {
          "timestamp": 1522169378000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/102/ (1/2)"
        },
        {
          "timestamp": 1522169416000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/299/ (2/2)"
        },
        {
          "timestamp": 1522169770000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/299/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/299/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/299\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/102/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/102"
        },
        {
          "timestamp": 1522170668000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1522170774000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/103/ (1/2)"
        },
        {
          "timestamp": 1522170812000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/301/ (2/2)"
        },
        {
          "timestamp": 1522171111000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/301/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/301/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/301\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/103/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/103"
        },
        {
          "timestamp": 1522171743000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1522171834000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/104/ (1/2)"
        },
        {
          "timestamp": 1522171901000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/302/ (2/2)"
        },
        {
          "timestamp": 1522172084000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/302/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/302/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/302\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/104/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/104"
        },
        {
          "timestamp": 1522172264000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1522172326000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/105/ (1/2)"
        },
        {
          "timestamp": 1522172394000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/303/ (2/2)"
        },
        {
          "timestamp": 1522172602000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/105/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/105\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/303/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/303"
        },
        {
          "timestamp": 1522178030000,
          "reviewer": ids["valderrv"],
          "message": "Patch Set 4: Code-Review+2"
        },
        {
          "timestamp": 1522178032000,
          "reviewer": ids["valderrv"],
          "message": "Change has been successfully merged by Vanessa Rene Valderrama"
        },
        {
          "timestamp": 1522190464000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 4:\n\nWe need to think about how this kind of change will break out existing projects and what the migration paths we want to provide to them."
        },
        {
          "timestamp": 1522255252000,
          "reviewer": ids["zxiiro"],
          "message": "Created a revert of this change as I87a8f3b25ab977cdcfd3c23da6cebd610edaf325"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "c75373b86d81fab215462ba54d77d37411a2e3f5",
          "parents": [
            "3ea6a674e095bb64a4830c4bd2bb66e155a674b2"
          ],
          "ref": "refs/changes/34/9634/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522169263000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522169770000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 33,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "82cfab4c96be013c27b7be595a4ff3c87eab8cda",
          "parents": [
            "3ea6a674e095bb64a4830c4bd2bb66e155a674b2"
          ],
          "ref": "refs/changes/34/9634/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522170668000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522171111000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 38,
          "sizeDeletions": -3
        },
        {
          "number": 3,
          "revision": "d43d693fc4a9f795af4adc2690ab2cd6158c3186",
          "parents": [
            "3ea6a674e095bb64a4830c4bd2bb66e155a674b2"
          ],
          "ref": "refs/changes/34/9634/3",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522171743000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522172084000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 38,
          "sizeDeletions": -3
        },
        {
          "number": 4,
          "revision": "12d6179c0e7c208a360a3c61c0b715b49310b39e",
          "parents": [
            "3ea6a674e095bb64a4830c4bd2bb66e155a674b2"
          ],
          "ref": "refs/changes/34/9634/4",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522172264000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1522178030000,
              "grantedBy": ids["valderrv"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1522178032000,
              "grantedBy": ids["valderrv"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522172602000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 39,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I5f2ec95669b8e0e8e3f5dd9dc4281e608cd6ba57",
      "commitNumber": 9642,
      "subject": "Adjust rtd script to respect project settings-file",
      "owner": ids["jeremyphelps"],
      "url": "https://gerrit.linuxfoundation.org/infra/9642",
      "commitMessage": "Adjust rtd script to respect project settings-file\n\nRTD service now requires a token to be in the POST\nstring to trigger a build.  Perisist this in a project\nlevel settings file.\n\nChange-Id: I5f2ec95669b8e0e8e3f5dd9dc4281e608cd6ba57\nSigned-off-by: Jeremy Phelps \u003cjphelps@linuxfoundation.org\u003e\n",
      "createdOnDate": 1522186501000,
      "lastUpdatedDate": 1522193238000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["lf-jenkins"],
        ids["valderrv"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1522186501000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1522186568000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/304/"
        },
        {
          "timestamp": 1522186714000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1522186739000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/304/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/304/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/304"
        },
        {
          "timestamp": 1522186781000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/305/"
        },
        {
          "timestamp": 1522187017000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/305/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/305"
        },
        {
          "timestamp": 1522187499000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1522187551000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/306/"
        },
        {
          "timestamp": 1522187738000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/306/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/306"
        },
        {
          "timestamp": 1522190340000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review-2\n\n(1 comment)"
        },
        {
          "timestamp": 1522192743000,
          "reviewer": ids["jeremyphelps"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1522192862000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/106/ (1/2)"
        },
        {
          "timestamp": 1522192902000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/307/ (2/2)"
        },
        {
          "timestamp": 1522193238000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/307/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/307/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/307\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/106/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/106"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3b4ea911df007af835aa26d10e9401b7a9314723",
          "parents": [
            "12d6179c0e7c208a360a3c61c0b715b49310b39e"
          ],
          "ref": "refs/changes/42/9642/1",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522186501000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522186739000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "f86e148e8e4281e17e122db1e4d7abe66fab7113",
          "parents": [
            "12d6179c0e7c208a360a3c61c0b715b49310b39e"
          ],
          "ref": "refs/changes/42/9642/2",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522186714000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522187017000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 7,
          "sizeDeletions": -4
        },
        {
          "number": 3,
          "revision": "b7ab0b39e7e953addd88dc60d54e7b25e60279ff",
          "parents": [
            "12d6179c0e7c208a360a3c61c0b715b49310b39e"
          ],
          "ref": "refs/changes/42/9642/3",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522187499000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1522190340000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1522187738000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/rtd-trigger-build.sh",
              "line": 28,
              "reviewer": ids["zxiiro"],
              "message": "Why is this pulling from global_settings? RTD tokens are per doc. This would break ODL and the workflow we\u0027re pushing.",
              "patchSetTimestamp": 1522187499000
            }
          ],
          "sizeInsertions": 5,
          "sizeDeletions": -4
        },
        {
          "number": 4,
          "revision": "d4450f916ccc7c550f2301b95000311e5e63af43",
          "parents": [
            "12d6179c0e7c208a360a3c61c0b715b49310b39e"
          ],
          "ref": "refs/changes/42/9642/4",
          "uploader": ids["jeremyphelps"],
          "createdOnDate": 1522192743000,
          "author": ids["jeremyphelps"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -2,
              "grantedOnDate": 1522190340000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1522193238000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 11,
          "sizeDeletions": -9
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I2fbbaf314b31c9c6be82de1a726f55d8a5340096",
      "commitNumber": 8420,
      "subject": "Add build strategy to sonar job",
      "owner": ids["jwagantall"],
      "url": "https://gerrit.linuxfoundation.org/infra/8420",
      "commitMessage": "Add build strategy to sonar job\n\nlf-maven-sonar job does not pick the right refspec when\ntriggering the job via gerrit comment. We need to add the\n\"Strategy for choosing what to build\" option to make sure the\njob checks out the correct revision.\n\nChange-Id: I2fbbaf314b31c9c6be82de1a726f55d8a5340096\nSigned-off-by: Jessica Wagantall \u003cjwagantall@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516219177000,
      "lastUpdatedDate": 1516219395000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["valderrv"]
      ],
      "comments": [
        {
          "timestamp": 1516219177000,
          "reviewer": ids["jwagantall"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1516219395000,
          "reviewer": ids["jwagantall"],
          "message": "Abandoned"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "e007e1b08915703d1a9029229298196a78d4d0ad",
          "parents": [
            "e47b229854b32451eb0483b43e55be8b6924c33c"
          ],
          "ref": "refs/changes/20/8420/1",
          "uploader": ids["jwagantall"],
          "createdOnDate": 1516219177000,
          "author": ids["jwagantall"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I50bcd337224adcecbf028f08b56cfebe2e10a3d4",
      "commitNumber": 8379,
      "subject": "Fix detox logs not being archived",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8379",
      "commitMessage": "Fix detox logs not being archived\n\nSince we immediately fail on any shell errors we miss log\ncollection at the end of the build. Fix detox part of script to\nallow the log collection code to run.\n\nChange-Id: I50bcd337224adcecbf028f08b56cfebe2e10a3d4\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1515723900000,
      "lastUpdatedDate": 1515736179000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["valderrv"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1515723900000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515724139000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/155/"
        },
        {
          "timestamp": 1515724499000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/155/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/155/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/155"
        },
        {
          "timestamp": 1515724572000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1515724638000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/158/"
        },
        {
          "timestamp": 1515724992000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/158/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/158"
        },
        {
          "timestamp": 1515726883000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1515727077000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/159/"
        },
        {
          "timestamp": 1515727237000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/159/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/159"
        },
        {
          "timestamp": 1515727706000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4: Patch Set 3 was rebased."
        },
        {
          "timestamp": 1515727915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/160/"
        },
        {
          "timestamp": 1515728069000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/160/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/160/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/160"
        },
        {
          "timestamp": 1515728982000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1515729141000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/165/"
        },
        {
          "timestamp": 1515729452000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/165/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/165/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/165"
        },
        {
          "timestamp": 1515730214000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1515730442000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/167/"
        },
        {
          "timestamp": 1515730592000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/167/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/167"
        },
        {
          "timestamp": 1515731867000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review+1\n\nReady to go."
        },
        {
          "timestamp": 1515736177000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 6: Code-Review+2"
        },
        {
          "timestamp": 1515736179000,
          "reviewer": ids["jluhrsen"],
          "message": "Change has been successfully merged by Jamo Luhrsen"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "13d1d3ec29cf80dbecf49eae761405320e6c2ce3",
          "parents": [
            "19b17f23472fd74b966848a72471cb1c587d99d8"
          ],
          "ref": "refs/changes/79/8379/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515723900000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515724499000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "f7a3dd7c875c72afeee8ed96439104380e93ddb3",
          "parents": [
            "19b17f23472fd74b966848a72471cb1c587d99d8"
          ],
          "ref": "refs/changes/79/8379/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515724572000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515724992000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 6,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "9f7dd23bf1bdf783fa8ae2c95a88ed90155d9daa",
          "parents": [
            "19b17f23472fd74b966848a72471cb1c587d99d8"
          ],
          "ref": "refs/changes/79/8379/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515726883000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515727237000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 18,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "ea6051bef5cfd8876d4f60421b17f9f83a9eb18e",
          "parents": [
            "7928aa87c9fc2638028821994f88eed2f946602e"
          ],
          "ref": "refs/changes/79/8379/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515727706000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515728069000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 18,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "4e465fb2221fbfc5edcc9cfcfc50e29f593e2df1",
          "parents": [
            "e34a403ba04be69ff88b2faadc1ddc8187559492"
          ],
          "ref": "refs/changes/79/8379/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515728982000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515729452000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 27,
          "sizeDeletions": -6
        },
        {
          "number": 6,
          "revision": "f6f5ec828da8600ea0602752c63058d0c50b235d",
          "parents": [
            "7030e31159d6ee4fbab8ae015611a39cbcd62e2c"
          ],
          "ref": "refs/changes/79/8379/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515730214000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1515731867000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515730592000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1515736177000,
              "grantedBy": ids["jluhrsen"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1515736179000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 27,
          "sizeDeletions": -6
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Iff578f4cfa39ce6b2540be45537931e6a3b48d22",
      "commitNumber": 8380,
      "subject": "Allow tox-install to handle base python ver",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8380",
      "commitMessage": "Allow tox-install to handle base python ver\n\nTurns tox-install.sh into a proper macro allowing the user to choose\nwhich base Python version to use in the tox virtualenv.\n\nIssue: RT-50802\nChange-Id: Iff578f4cfa39ce6b2540be45537931e6a3b48d22\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1515727706000,
      "lastUpdatedDate": 1515736122000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["valderrv"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1515727706000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515727918000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/161/ (1/2)"
        },
        {
          "timestamp": 1515727924000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/56/ (2/2)"
        },
        {
          "timestamp": 1515728088000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/161/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/161/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/161\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/56/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/56"
        },
        {
          "timestamp": 1515728982000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1515729093000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/164/ (1/2)"
        },
        {
          "timestamp": 1515729144000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/57/ (2/2)"
        },
        {
          "timestamp": 1515729268000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/164/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/164/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/164\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/57/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/57"
        },
        {
          "timestamp": 1515730214000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1515730223000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/166/ (1/2)"
        },
        {
          "timestamp": 1515730486000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/58/ (2/2)"
        },
        {
          "timestamp": 1515730540000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/166/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/166\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/58/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/58"
        },
        {
          "timestamp": 1515730895000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1\n\nReady to go."
        },
        {
          "timestamp": 1515736121000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1515736122000,
          "reviewer": ids["jluhrsen"],
          "message": "Change has been successfully merged by Jamo Luhrsen"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7928aa87c9fc2638028821994f88eed2f946602e",
          "parents": [
            "19b17f23472fd74b966848a72471cb1c587d99d8"
          ],
          "ref": "refs/changes/80/8380/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515727706000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515728088000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 53,
          "sizeDeletions": -12
        },
        {
          "number": 2,
          "revision": "e34a403ba04be69ff88b2faadc1ddc8187559492",
          "parents": [
            "b2f5578375c16a3fec8aecfc8e58689f24b98fda"
          ],
          "ref": "refs/changes/80/8380/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515728982000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515729268000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 62,
          "sizeDeletions": -12
        },
        {
          "number": 3,
          "revision": "7030e31159d6ee4fbab8ae015611a39cbcd62e2c",
          "parents": [
            "b2f5578375c16a3fec8aecfc8e58689f24b98fda"
          ],
          "ref": "refs/changes/80/8380/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515730214000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1515730895000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515730540000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1515736121000,
              "grantedBy": ids["jluhrsen"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1515736122000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 64,
          "sizeDeletions": -12
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I406f28e10e2d701f5f8fd396fea10d81bffd61a8",
      "commitNumber": 8370,
      "subject": "Enable pyenv if available in image",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8370",
      "commitMessage": "Enable pyenv if available in image\n\nWe need pyenv so that tox can pull in Python versions provided by\nthe pyenv setup.\n\nIssue: RT-50802\nChange-Id: I406f28e10e2d701f5f8fd396fea10d81bffd61a8\nCo-authored-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1515713486000,
      "lastUpdatedDate": 1515736045000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["valderrv"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1515713486000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515713607000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/154/"
        },
        {
          "timestamp": 1515713792000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/154/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/154"
        },
        {
          "timestamp": 1515728982000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2: Patch Set 1 was rebased."
        },
        {
          "timestamp": 1515729082000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/163/"
        },
        {
          "timestamp": 1515729238000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/163/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/163"
        },
        {
          "timestamp": 1515730901000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1\n\nReady to go."
        },
        {
          "timestamp": 1515736043000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1515736045000,
          "reviewer": ids["jluhrsen"],
          "message": "Change has been successfully merged by Jamo Luhrsen"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "19b17f23472fd74b966848a72471cb1c587d99d8",
          "parents": [
            "d48dfedd5c0780aca422f0a12bfe9f142a01b2f5"
          ],
          "ref": "refs/changes/70/8370/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515713486000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515713792000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 18,
          "sizeDeletions": -3
        },
        {
          "number": 2,
          "revision": "b2f5578375c16a3fec8aecfc8e58689f24b98fda",
          "parents": [
            "444423bc66f9771b24eba844719c02e133964d67"
          ],
          "ref": "refs/changes/70/8370/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515728982000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1515730901000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515729238000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1515736043000,
              "grantedBy": ids["jluhrsen"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1515736045000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 18,
          "sizeDeletions": -3
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I601f8d7a21cab0a215947ff1d882c6666be0cf65",
      "commitNumber": 8365,
      "subject": "Install tox-pyenv",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8365",
      "commitMessage": "Install tox-pyenv\n\nNeed tox-pyenv so that tox can automatically pick up pyenv\ninstallations.\n\nIssue: RT-50802\nChange-Id: I601f8d7a21cab0a215947ff1d882c6666be0cf65\nCo-authored-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1515702190000,
      "lastUpdatedDate": 1515736030000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["valderrv"],
        ids["zxiiro"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1515702190000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515702233000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/148/"
        },
        {
          "timestamp": 1515702393000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/148/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/148/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/148"
        },
        {
          "timestamp": 1515712831000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1515712864000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/153/"
        },
        {
          "timestamp": 1515713128000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/153/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/153"
        },
        {
          "timestamp": 1515728982000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3: Patch Set 2 was rebased."
        },
        {
          "timestamp": 1515729060000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/162/"
        },
        {
          "timestamp": 1515729220000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/162/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/162"
        },
        {
          "timestamp": 1515730906000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1\n\nReady to go."
        },
        {
          "timestamp": 1515736028000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1515736030000,
          "reviewer": ids["jluhrsen"],
          "message": "Change has been successfully merged by Jamo Luhrsen"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "dceea6ff327045a51da3b5f840a7c2a55082a352",
          "parents": [
            "c7453d102c1c3f9051864a487d42acc826506830"
          ],
          "ref": "refs/changes/65/8365/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515702190000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515702393000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d48dfedd5c0780aca422f0a12bfe9f142a01b2f5",
          "parents": [
            "c7453d102c1c3f9051864a487d42acc826506830"
          ],
          "ref": "refs/changes/65/8365/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515712831000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515713128000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -5
        },
        {
          "number": 3,
          "revision": "444423bc66f9771b24eba844719c02e133964d67",
          "parents": [
            "25d3bb45eaf1e25522b680cac541416a59e65085"
          ],
          "ref": "refs/changes/65/8365/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1515728982000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "TRIVIAL_REBASE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1515730906000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515729220000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1515736028000,
              "grantedBy": ids["jluhrsen"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1515736030000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 5,
          "sizeDeletions": -5
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 8,
        "approvalCount": 1,
        "commentCount": 0,
        "approvals": {
          "2": 1
        }
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["jeremyphelps"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 2,
        "commentCount": 0,
        "approvals": {
          "1": 1,
          "2": 1
        }
      }
    },
    {
      "identity": ids["jwagantall"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400",
        "commitNumber": 10236,
        "subject": "Add pipefail",
        "owner": ids["valderrv"],
        "url": "https://gerrit.linuxfoundation.org/infra/10236",
        "commitMessage": "Add pipefail\n\nIf the SET_JDK_VERSION is not set the script still runs but doesn\u0027t\nconfigure JAVA_HOME properly. This change foreces the script to fail if\nSET_JDK_VERSION is not set.\n\nChange-Id: Ifdbf6c647a80e1d9e96e159a9bd7e2c097cd9400\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
        "createdOnDate": 1524685518000,
        "lastUpdatedDate": 1529935650000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["agardner"],
          ids["lf-jenkins"],
          ids["agrimberg"],
          ids["zxiiro"]
        ],
        "comments": [
          {
            "timestamp": 1524685518000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1524685958000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/"
          },
          {
            "timestamp": 1524686194000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/393/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/393"
          },
          {
            "timestamp": 1524689275000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 1: Code-Review+1\n\n(1 comment)\n\nI have no problem with setting to \u0027strict mode\u0027 but the patch titled pipe-fail and only -u is needed for this case."
          },
          {
            "timestamp": 1524694918000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1524694970000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/"
          },
          {
            "timestamp": 1524695120000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/394/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/394"
          },
          {
            "timestamp": 1525103948000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 2: Code-Review-1\n\nI think this is good, but I\u0027m slightly worried that we may be introducing a change that requires updates to jobs. Please add a note to the release notes stating that java-version must get set either globally or at the job level!"
          },
          {
            "timestamp": 1529935650000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\nI think this change won\u0027t resolve what the commit description describes. SET_JDK_VERSION appears to have a default version defined in the scripts so the script will always successfully run.\n\nWe need to probably pass a non-valid option to SET_JDK_VERSION and check if it\u0027s set and make a decision to exit out of the script based on that logic."
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "3513473d69aadd89f346f7aaf0a81de97b1d0f9c",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/36/10236/1",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524685518000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1524689275000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524686194000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/update-java-alternatives.sh",
                "line": 20,
                "reviewer": ids["agardner"],
                "message": "Only the set -u (nounset) is needed to exit on undeclared variables.",
                "patchSetTimestamp": 1524685518000
              }
            ],
            "sizeInsertions": 2,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "6c105240553a72ddc77ee21329d0dc1f53b27000",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/36/10236/2",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524694918000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525103948000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1529935650000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524695120000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 2,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/update-java-alternatives.sh",
          "line": 20,
          "reviewer": ids["agardner"],
          "message": "Only the set -u (nounset) is needed to exit on undeclared variables.",
          "patchSetTimestamp": 1524685518000
        }
      ]
    },
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "If2edba598b47484b1708f1e0f3fb96f035511841",
        "commitNumber": 10212,
        "subject": "Configure tox tests allow serial execution",
        "owner": ids["valderrv"],
        "url": "https://gerrit.linuxfoundation.org/infra/10212",
        "commitMessage": "Configure tox tests allow serial execution\n\nConfiguring tox tests to allow serial or parallel execution configurable\nwithin JJB by setting the PARALLEL parameter to true or false.\n\nIssue: RELENG-912\nChange-Id: If2edba598b47484b1708f1e0f3fb96f035511841\nSigned-off-by: Vanessa Rene Valderrama \u003cvvalderrama@linuxfoundation.org\u003e\n",
        "createdOnDate": 1524600060000,
        "lastUpdatedDate": 1529674103000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["zxiiro"],
          ids["valderrv"],
          ids["lf-jenkins"],
          ids["agardner"],
          ids["bramwelt"],
          ids["agrimberg"]
        ],
        "comments": [
          {
            "timestamp": 1524600060000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1524600097000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 1: Code-Review-2\n\nThis change is a work in progress and not ready for review."
          },
          {
            "timestamp": 1524602508000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1524602980000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 2: Commit message was updated."
          },
          {
            "timestamp": 1524603019000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 1: -Code-Review"
          },
          {
            "timestamp": 1524603099000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/"
          },
          {
            "timestamp": 1524603270000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/387/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/387"
          },
          {
            "timestamp": 1524604140000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 2: -Code-Review"
          },
          {
            "timestamp": 1524608140000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review-1\n\n(2 comments)\n\n@Vaness not sure if you\u0027re ready for review since you removed the code-review vote but the code hasn\u0027t changed since patchset 1. The current patch seems incomplete and does not seem to tie into JJB. We need to add the parallel parameter to the JJB side of the code."
          },
          {
            "timestamp": 1524676208000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 3."
          },
          {
            "timestamp": 1524676422000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/"
          },
          {
            "timestamp": 1524676582000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/391/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/391"
          },
          {
            "timestamp": 1524676819000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 4."
          },
          {
            "timestamp": 1524677041000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/"
          },
          {
            "timestamp": 1524677246000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/392/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/392"
          },
          {
            "timestamp": 1524690472000,
            "reviewer": ids["agardner"],
            "message": "Patch Set 4: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1524769528000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 5."
          },
          {
            "timestamp": 1524769582000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/"
          },
          {
            "timestamp": 1524769795000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/395/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/395"
          },
          {
            "timestamp": 1524770305000,
            "reviewer": ids["bramwelt"],
            "message": "Patch Set 5:\n\n(1 comment)\n\nHave you added a \u0027PARALLEL\u0027 parameter to the job config?"
          },
          {
            "timestamp": 1524770656000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 5:\n\n(1 comment)\n\nI added the PARALLEL parameter to lf-python-jobs.yaml"
          },
          {
            "timestamp": 1524841616000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 5: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1524845730000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 4:\n\n(1 comment)"
          },
          {
            "timestamp": 1524849280000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 6."
          },
          {
            "timestamp": 1524849440000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/"
          },
          {
            "timestamp": 1524849609000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/398/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/398"
          },
          {
            "timestamp": 1525094161000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 6: Code-Review-1\n\n(1 comment)\n\nPlease link to a sandbox test showing the parallel parameter working."
          },
          {
            "timestamp": 1525122146000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 7."
          },
          {
            "timestamp": 1525122163000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 7: Code-Review-1\n\ntesting on the sandbox"
          },
          {
            "timestamp": 1525122321000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/"
          },
          {
            "timestamp": 1525122520000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/402/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/402"
          },
          {
            "timestamp": 1525204095000,
            "reviewer": ids["valderrv"],
            "message": "Patch Set 7: -Code-Review\n\nSandbox link:  https://jenkins.acumos.org/sandbox/job/acumos-python-client-tox-verify-master/\n\nTests include:\nNot setting parallel\nparallel\u003dtrue\nparallel\u003dfalse"
          },
          {
            "timestamp": 1525207059000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 7: Code-Review+1\n\nLooks good, thanks!"
          },
          {
            "timestamp": 1525288676000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1525289434000,
            "reviewer": ids["valderrv"],
            "message": "Uploaded patch set 8: Commit message was updated."
          },
          {
            "timestamp": 1525289453000,
            "reviewer": ids["agrimberg"],
            "message": "Patch Set 8: Code-Review+2"
          },
          {
            "timestamp": 1525289513000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8: Code-Review+1"
          },
          {
            "timestamp": 1525289691000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/"
          },
          {
            "timestamp": 1525289842000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/403/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/403"
          },
          {
            "timestamp": 1525305799000,
            "reviewer": ids["agrimberg"],
            "message": "Change has been successfully merged by Andrew Grimberg"
          },
          {
            "timestamp": 1529674103000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 8:\n\nDoh, just realized this patch causes a bug described here: RELENG-1042\n\nworking on a fix now..."
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "8734c3d3bf13e7de97ac369523ad0d4dd4802338",
            "parents": [
              "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
            ],
            "ref": "refs/changes/12/10212/1",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524600060000,
            "author": ids["valderrv"],
            "isDraft": true,
            "kind": "REWORK",
            "approvals": [],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 12,
                "reviewer": ids["zxiiro"],
                "message": "Just above the Change-Id line add:\n\n Issue: RELENG-912\n\nThis way we can reference back to the Jira if needed.",
                "patchSetTimestamp": 1524600060000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -6
          },
          {
            "number": 2,
            "revision": "8681d951bb1ed9f942bb148f5b7647a1a3e9394c",
            "parents": [
              "0b1d0ba4945b93dc5d86fffef20f4be44fc5a2f9"
            ],
            "ref": "refs/changes/12/10212/2",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524602980000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524608140000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1524603270000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/tox-run.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "This needs to be hooked into JJB.",
                "patchSetTimestamp": 1524602980000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 40,
                "reviewer": ids["zxiiro"],
                "message": "We should probably rename detox_status to just tox_status so that the test at the bottom of this script can parse both tox and detox statuses.",
                "patchSetTimestamp": 1524602980000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -6
          },
          {
            "number": 3,
            "revision": "f19eb7370a39105f24648a1d243e7bcc652b3f25",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/3",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524676208000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1524676582000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 21,
            "sizeDeletions": -6
          },
          {
            "number": 4,
            "revision": "79a482599e716ded98735bc9e0a19d1abd8fbe0c",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/4",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524676819000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524690472000,
                "grantedBy": ids["agardner"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524677246000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/tox-run.sh",
                "line": 32,
                "reviewer": ids["agardner"],
                "message": "why is this set? also, perhaps catch if PARALLEL is unset set to false.",
                "patchSetTimestamp": 1524676819000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 32,
                "reviewer": ids["zxiiro"],
                "message": "PARALLEL\u003d\"${PARALLEL:-true}\"",
                "patchSetTimestamp": 1524676819000
              }
            ],
            "sizeInsertions": 22,
            "sizeDeletions": -7
          },
          {
            "number": 5,
            "revision": "2192111889305dd00fa7d0f9bbcee00eebcd5360",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/5",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524769528000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1524841616000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524769795000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 101,
                "reviewer": ids["zxiiro"],
                "message": "I think you meant to put this in the tox job configuration. This here is applying it to the \"CLM\" job not tox.\n\nAlso you need to add a string parameter in the \"parameters:\" section of JJB for Jenkins to add an actual parameter. The definition here purely is to tell JJB what variable \"parallel\" should be set to by default if the user does not provide on. We still need to define the parameter itself.",
                "patchSetTimestamp": 1524769528000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 52,
                "reviewer": ids["bramwelt"],
                "message": "Since the default has been to run tox in parallel, instead of checking if Parallel is unset, it can always default to true \"PARALLEL\u003d${PARALLEL:-true}\".",
                "patchSetTimestamp": 1524769528000
              },
              {
                "file": "shell/tox-run.sh",
                "line": 52,
                "reviewer": ids["valderrv"],
                "message": "I changed the patch to catch if PARALLEL is unset set to false based on a previous review.",
                "patchSetTimestamp": 1524769528000
              }
            ],
            "sizeInsertions": 23,
            "sizeDeletions": -7
          },
          {
            "number": 6,
            "revision": "39be1026ce4511f78351a77e7f7a94be4f71806c",
            "parents": [
              "cb633b472a2e7a814b24071299d2cde41247f1df"
            ],
            "ref": "refs/changes/12/10212/6",
            "uploader": ids["valderrv"],
            "createdOnDate": 1524849280000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525094161000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1524849609000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 447,
                "reviewer": ids["zxiiro"],
                "message": "parallel is not a valid parameter of the git-scm plugin:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/scm.html\n\nThis is not what we need here though. What we to do is define a environment variable that Jenkins passes to the bash script. To do that we need to declare a Jenkins Parameter. You can do that using the \"string\" parameter in JJB:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/parameters.html\n\nWe have a few examples of this in global-jjb for example in the Python CLM job:\n\nhttps://github.com/lfit/releng-global-jjb/blob/master/jjb/lf-python-jobs.yaml#L110-L114",
                "patchSetTimestamp": 1524849280000
              }
            ],
            "sizeInsertions": 20,
            "sizeDeletions": -6
          },
          {
            "number": 7,
            "revision": "61a01a9ce259bafec0045901b3c91788c05ea236",
            "parents": [
              "35adc33717a2a9ca867c5a624904a963d8449ae6"
            ],
            "ref": "refs/changes/12/10212/7",
            "uploader": ids["valderrv"],
            "createdOnDate": 1525122146000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1525288676000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525207059000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525122520000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "/COMMIT_MSG",
                "line": 12,
                "reviewer": ids["agrimberg"],
                "message": "This really should be\n\nIssue: RELENG-912\n\nI don\u0027t like seeing non-annotated footer meta-data",
                "patchSetTimestamp": 1525122146000
              }
            ],
            "sizeInsertions": 27,
            "sizeDeletions": -6
          },
          {
            "number": 8,
            "revision": "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02",
            "parents": [
              "35adc33717a2a9ca867c5a624904a963d8449ae6"
            ],
            "ref": "refs/changes/12/10212/8",
            "uploader": ids["valderrv"],
            "createdOnDate": 1525289434000,
            "author": ids["valderrv"],
            "isDraft": false,
            "kind": "NO_CODE_CHANGE",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1525289453000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1525305799000,
                "grantedBy": ids["agrimberg"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525289513000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525289842000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [],
            "sizeInsertions": 27,
            "sizeDeletions": -6
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "/COMMIT_MSG",
          "line": 12,
          "reviewer": ids["zxiiro"],
          "message": "Just above the Change-Id line add:\n\n Issue: RELENG-912\n\nThis way we can reference back to the Jira if needed.",
          "patchSetTimestamp": 1524600060000
        },
        {
          "file": "shell/tox-run.sh",
          "line": 32,
          "reviewer": ids["zxiiro"],
          "message": "This needs to be hooked into JJB.",
          "patchSetTimestamp": 1524602980000
        },
        {
          "file": "shell/tox-run.sh",
          "line": 40,
          "reviewer": ids["zxiiro"],
          "message": "We should probably rename detox_status to just tox_status so that the test at the bottom of this script can parse both tox and detox statuses.",
          "patchSetTimestamp": 1524602980000
        },
        {
          "file": "shell/tox-run.sh",
          "line": 32,
          "reviewer": ids["agardner"],
          "message": "why is this set? also, perhaps catch if PARALLEL is unset set to false.",
          "patchSetTimestamp": 1524676819000
        },
        {
          "file": "shell/tox-run.sh",
          "line": 32,
          "reviewer": ids["zxiiro"],
          "message": "PARALLEL\u003d\"${PARALLEL:-true}\"",
          "patchSetTimestamp": 1524676819000
        },
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 101,
          "reviewer": ids["zxiiro"],
          "message": "I think you meant to put this in the tox job configuration. This here is applying it to the \"CLM\" job not tox.\n\nAlso you need to add a string parameter in the \"parameters:\" section of JJB for Jenkins to add an actual parameter. The definition here purely is to tell JJB what variable \"parallel\" should be set to by default if the user does not provide on. We still need to define the parameter itself.",
          "patchSetTimestamp": 1524769528000
        },
        {
          "file": "shell/tox-run.sh",
          "line": 52,
          "reviewer": ids["bramwelt"],
          "message": "Since the default has been to run tox in parallel, instead of checking if Parallel is unset, it can always default to true \"PARALLEL\u003d${PARALLEL:-true}\".",
          "patchSetTimestamp": 1524769528000
        },
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 447,
          "reviewer": ids["zxiiro"],
          "message": "parallel is not a valid parameter of the git-scm plugin:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/scm.html\n\nThis is not what we need here though. What we to do is define a environment variable that Jenkins passes to the bash script. To do that we need to declare a Jenkins Parameter. You can do that using the \"string\" parameter in JJB:\n\nhttps://docs.openstack.org/infra/jenkins-job-builder/parameters.html\n\nWe have a few examples of this in global-jjb for example in the Python CLM job:\n\nhttps://github.com/lfit/releng-global-jjb/blob/master/jjb/lf-python-jobs.yaml#L110-L114",
          "patchSetTimestamp": 1524849280000
        },
        {
          "file": "/COMMIT_MSG",
          "line": 12,
          "reviewer": ids["agrimberg"],
          "message": "This really should be\n\nIssue: RELENG-912\n\nI don\u0027t like seeing non-annotated footer meta-data",
          "patchSetTimestamp": 1525122146000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 6,
        "commentCount": 6,
        "approvals": {
          "-1": 4,
          "1": 2
        }
      }
    },
    {
      "identity": ids["agardner"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 2,
        "commentCount": 2,
        "approvals": {
          "-1": 1,
          "1": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    },
    {
      "identity": ids["bramwelt"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 1,
        "approvals": {}
      }
    },
    {
      "identity": ids["agrimberg"],
      "approvalData": {
        "addedAsReviewerCount": 2,
        "approvalCount": 3,
        "commentCount": 1,
        "approvals": {
          "-1": 2,
          "2": 1
        }
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 2
    }
  },
  "averageTimeInCodeReview": 352869500,
  "abandonedCommitCount": 0,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 2
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 1
};