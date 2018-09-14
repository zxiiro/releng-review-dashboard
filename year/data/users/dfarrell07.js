userdata['dfarrell07'] = {
  "identity": ids["dfarrell07"],
  "reviewCountPlus2": 2,
  "reviewCountPlus1": 1,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1515617983000,
  "lastActiveDate": 1527864802000,
  "activeDayCount": 6,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I942726a626622ee16e5b9a9366f7fe552b144314",
      "commitNumber": 10732,
      "subject": "Add OpenCI event emit job, builder",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/10732",
      "commitMessage": "Add OpenCI event emit job, builder\n\nEarly prototype for cross-project, event-driven CI effort under OpenCI,\nbetween ODL, OPNFV and others.\n\nEmit script copied from Fatih in:\n\nhttps://git.opendaylight.org/gerrit/#/c/72096/\n\nChange-Id: I942726a626622ee16e5b9a9366f7fe552b144314\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1526930665000,
      "lastUpdatedDate": 1527864802000,
      "isOpen": true,
      "status": "NEW",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["fdegir"],
        ids["yrobla"]
      ],
      "comments": [
        {
          "timestamp": 1526930665000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1526930842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/"
        },
        {
          "timestamp": 1526931046000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/449"
        },
        {
          "timestamp": 1527842354000,
          "reviewer": ids["fdegir"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1527842668000,
          "reviewer": ids["yrobla"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1527864802000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\n(3 comments)"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "69fc6ccbb7ac01d21452036ece81b1af121b171e",
          "parents": [
            "9b240453b91f3c4b0844ea1c593721a1c421caa2"
          ],
          "ref": "refs/changes/32/10732/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1526930665000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527864802000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1526931046000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1527842668000,
              "grantedBy": ids["yrobla"]
            }
          ],
          "comments": [
            {
              "file": "jjb/openci-jobs.yaml",
              "line": 48,
              "reviewer": ids["zxiiro"],
              "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 1,
              "reviewer": ids["fdegir"],
              "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 4,
              "reviewer": ids["zxiiro"],
              "message": "2018",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 11,
              "reviewer": ids["zxiiro"],
              "message": "We should probably `set -e` too",
              "patchSetTimestamp": 1526930665000
            },
            {
              "file": "shell/openci-emit-ape.sh",
              "line": 26,
              "reviewer": ids["yrobla"],
              "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
              "patchSetTimestamp": 1526930665000
            }
          ],
          "sizeInsertions": 125,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id8426b838d0c64eaf2807307ec4dbf5cb0a8017d",
      "commitNumber": 9575,
      "subject": "WIP: Testing fixes for rtd-verify",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/9575",
      "commitMessage": "WIP: Testing fixes for rtd-verify\n\nDOC_DIR is used in rtd-verify.sh in a mv as if it is terminated at root.\n\nmv \"$DOC_DIR\" archives/\n\nWhich fails with the current \"docs/_build/html\" default.\n\nThis doesn\u0027t happen for the docs project, but does happen for packaging\nand netvirt.\n\nDocs will be generated by tox in dir relative to absolte path TOX_DIR.\nBase DOCS_DIR on TOX_DIR to get properly-rooted path.\n\nTesting adding TOX dir on both ends for now, should only do one.\n\nChange-Id: Id8426b838d0c64eaf2807307ec4dbf5cb0a8017d\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1521782124000,
      "lastUpdatedDate": 1523475922000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["dfarrell07"]
      ],
      "comments": [
        {
          "timestamp": 1521782124000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521782458000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/297/"
        },
        {
          "timestamp": 1521782801000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/297/ : FAILURE\n\nThe commit message shortlog (1st line in commit message) ins\"t in the imperative mood. This is usually because it contains an -ing word, e.g., Adding, which is advised against. Instead try saying something like \"Add foo unit test\". ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/297/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/297"
        },
        {
          "timestamp": 1523470909000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nOne of the problems is projects can modify where their docs are built. For example:\n\n* odl/docs: {toxinidir}/docs/_build/html\n* int/pkg: {envtmpdir}/html\n\nSince our build scripts assume the tox environment named \"docs\" though perhaps we can parse for\n\n [testenv:docs]\n commands \u003d sphinx-build ... path/to/docs/\n\nLet me see if I can find something that let\u0027s use do this..."
        },
        {
          "timestamp": 1523471405000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\nAfter doing a bit of research I think if we wanted to do this programmatically it would be a big effort to support all of tox\u0027s variables\n\n{envtmpdir}, {toxinidir}, etc...\n\nConsidering that the doc-dir is a configurable path we should have the projects enter it in their job configuration."
        },
        {
          "timestamp": 1523472217000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nThe fix on the ODL side:\n\nhttps://jenkins.opendaylight.org/sandbox/job/packaging-rtd-verify-fluorine/1/"
        },
        {
          "timestamp": 1523472235000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nWoops meant to link to https://git.opendaylight.org/gerrit/70801"
        },
        {
          "timestamp": 1523475917000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\nAwesome Thanh, thanks for figuring out a better solution to this. :)"
        },
        {
          "timestamp": 1523475922000,
          "reviewer": ids["dfarrell07"],
          "message": "Abandoned"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "a52db46d71c5e9fba0a91f369104e697ef50d6e7",
          "parents": [
            "f75d04ed3780933fb82b31c596f579e482dd6d06"
          ],
          "ref": "refs/changes/75/9575/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1521782124000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1523471405000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1521782801000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": -2
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Id97f3ae4635dc7a685a0d1e58effd24ee312c703",
      "commitNumber": 8347,
      "subject": "Don\u0027t try to pushd into dir that doesn\u0027t exist",
      "owner": ids["dfarrell07"],
      "url": "https://gerrit.linuxfoundation.org/infra/8347",
      "commitMessage": "Don\u0027t try to pushd into dir that doesn\u0027t exist\n\nJust download packer into WORKSPACE vs bothering with a tmp packer dir.\n\nChange-Id: Id97f3ae4635dc7a685a0d1e58effd24ee312c703\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1515617983000,
      "lastUpdatedDate": 1515620236000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1515617983000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1515618077000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/140/"
        },
        {
          "timestamp": 1515618263000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\nUsing the macro that installs packer like this\n\nhttps://git.opendaylight.org/gerrit/#/c/60435/15/jjb/packaging/packaging.yaml@292\n\nis failing with\n\n20:45:29 packer.io command not is available. Installing packer ...\n20:45:29 /tmp/jenkins8024552679583525907.sh: line 27: pushd: packer: No such file or directory\n\nhttps://jenkins.opendaylight.org/sandbox/job/packaging-build-packer-virtualbox-master/4/console"
        },
        {
          "timestamp": 1515618384000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/140/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/140/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/140"
        },
        {
          "timestamp": 1515619115000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1515619476000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/141/"
        },
        {
          "timestamp": 1515619711000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1515619732000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/141/ : ABORTED\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/141/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/141"
        },
        {
          "timestamp": 1515619737000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1515619868000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/142/"
        },
        {
          "timestamp": 1515620199000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/142/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/142"
        },
        {
          "timestamp": 1515620236000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "dec89e7273ae3003de5fb6bfa70bb98594fc87ac",
          "parents": [
            "064e85f576fecfaea7ec24ad6ebc10c32a1317d1"
          ],
          "ref": "refs/changes/47/8347/1",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1515617983000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515618384000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "90c3c066a01c398347666f841f6d62ddd65e9d54",
          "parents": [
            "064e85f576fecfaea7ec24ad6ebc10c32a1317d1"
          ],
          "ref": "refs/changes/47/8347/2",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1515619115000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1515619732000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 19,
          "sizeDeletions": -19
        },
        {
          "number": 3,
          "revision": "333d661d90ff0291664d49ea5de5866a0ed8b94d",
          "parents": [
            "064e85f576fecfaea7ec24ad6ebc10c32a1317d1"
          ],
          "ref": "refs/changes/47/8347/3",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1515619711000,
          "author": ids["dfarrell07"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1515619737000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1515620236000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1515620199000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 57,
          "sizeDeletions": -57
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I2229d66f637bd5aab203a3bbf12aa1e677a471a1",
      "commitNumber": 12122,
      "subject": "Add Jenkins Sandbox Cleanup job",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12122",
      "commitMessage": "Add Jenkins Sandbox Cleanup job\n\nThis cleanup job runs weekly on Saturdays to clear out Sandbox\njobs and views from the system.\n\nThe benefit of this is that it uses the same version of JJB as\nthe other CI jobs whereas the traditional cron job we put in puppet\ndoes not often get updated to match the right version.\n\nIssue: RELENG-1118\nChange-Id: I2229d66f637bd5aab203a3bbf12aa1e677a471a1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1533414562000,
      "lastUpdatedDate": 1533859346000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["jeremyphelps"]
      ],
      "comments": [
        {
          "timestamp": 1533414562000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1533414636000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ (1/2)"
        },
        {
          "timestamp": 1533414684000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ (2/2)"
        },
        {
          "timestamp": 1533414875000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/687/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/687\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/293/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/293"
        },
        {
          "timestamp": 1533570613000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1:\n\nI\u0027m really on the fence with this change. It only solves 1/2 of the configuration problem. That of the Jenkins jobs. It does nothing for the Nexus side for clearing out the job logs that exist in the sandbox holding area which continues to have to be a cron job."
        },
        {
          "timestamp": 1533574810000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n\u003e I\u0027m really on the fence with this change. It only solves 1/2 of the\n \u003e configuration problem. That of the Jenkins jobs. It does nothing\n \u003e for the Nexus side for clearing out the job logs that exist in the\n \u003e sandbox holding area which continues to have to be a cron job.\n\nTo be fair the Nexus side is a completely separate step. Even if we ignore this job. It required modifying 2 separate puppet files. One for Jenkins and one for Nexus. Irrespective of this patch it was still a 2 step process previously too. This reduces the steps to 1 but does bring up a point that we need to document the Nexus part in our infrastructure docs."
        },
        {
          "timestamp": 1533651337000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1533651424000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ (1/2)"
        },
        {
          "timestamp": 1533651444000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ (2/2)"
        },
        {
          "timestamp": 1533651590000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/294/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/294\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/689/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/689"
        },
        {
          "timestamp": 1533851963000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859329000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1533859346000,
          "reviewer": ids["jeremyphelps"],
          "message": "Change has been successfully merged by Jeremy Phelps"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7ca8d2677a2b1c8738d676feaa776240e878dc9c",
          "parents": [
            "78f0bd978eeadea71fdc31e16de4cc4b8e769b48"
          ],
          "ref": "refs/changes/22/12122/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533414562000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1533414875000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 105,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "1eda455b5c9e28a98441ddd46a61035dd5f60fe6",
          "parents": [
            "8a5ed774fd2f4109ff9fe6da4359263dc3a1ab29"
          ],
          "ref": "refs/changes/22/12122/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1533651337000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533851963000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1533859329000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1533859346000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1533651590000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 97,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I38aaf2ff3d655d44e757c863f83a0b2cb811ab41",
      "commitNumber": 10460,
      "subject": "Bug Fix: Replace -type f with -xtype f",
      "owner": ids["mardim"],
      "url": "https://gerrit.linuxfoundation.org/infra/10460",
      "commitMessage": "Bug Fix: Replace -type f with -xtype f\n\nThe -type f parameter cannot recognize symbolic link files\nso the replacement with the -xtype f parameter solve this problem\n\nhttps://jira.opendaylight.org/browse/INTPAK-162\n\nChange-Id: I38aaf2ff3d655d44e757c863f83a0b2cb811ab41\nSigned-off-by: Dimitrios Markou \u003cmardim@intracom-telecom.com\u003e\nSigned-off-by: Anil Belur \u003cabelur@linuxfoundation.org\u003e\n",
      "createdOnDate": 1525524127000,
      "lastUpdatedDate": 1525565219000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["agardner"],
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1525524127000,
          "reviewer": ids["mardim"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525524366000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/"
        },
        {
          "timestamp": 1525524541000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/420/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/420"
        },
        {
          "timestamp": 1525562250000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564031000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1525564201000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1525564299000,
          "reviewer": ids["askb"],
          "message": "Uploaded patch set 2: Commit message was updated."
        },
        {
          "timestamp": 1525564503000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/"
        },
        {
          "timestamp": 1525564683000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/421/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/421"
        },
        {
          "timestamp": 1525565216000,
          "reviewer": ids["askb"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525565219000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "4b7b95d316c0711208add009eb3061d49af44f13",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/1",
          "uploader": ids["mardim"],
          "createdOnDate": 1525524127000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1525564201000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525524541000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525562250000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [
            {
              "file": "/COMMIT_MSG",
              "line": 12,
              "reviewer": ids["askb"],
              "message": "minor nit, we link ODL jira in the same way instead we should use the full link.",
              "patchSetTimestamp": 1525524127000
            }
          ],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        },
        {
          "number": 2,
          "revision": "d3cac52899668bc9b7f1fe7fcf16203bcf86ce53",
          "parents": [
            "c3150dcea8069e284ec52bf487541576a62687ab"
          ],
          "ref": "refs/changes/60/10460/2",
          "uploader": ids["askb"],
          "createdOnDate": 1525564299000,
          "author": ids["mardim"],
          "isDraft": false,
          "kind": "NO_CODE_CHANGE",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525565216000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525565219000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525564683000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1,
          "sizeDeletions": -1
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If54f43eb3f66d0c6b493495a82a65989fc7ed6c3",
      "commitNumber": 10397,
      "subject": "Add override for GT file-paths in Python jobs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/10397",
      "commitMessage": "Add override for GT file-paths in Python jobs\n\nSome projects may have small Python sub-projects within their\nrepos. This would allow them to only trigger builds when there\nis a change in the relevant directory.\n\nChange-Id: If54f43eb3f66d0c6b493495a82a65989fc7ed6c3\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
      "createdOnDate": 1525362547000,
      "lastUpdatedDate": 1525385719000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["shague"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["zxiiro"]
      ],
      "comments": [
        {
          "timestamp": 1525362547000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1525365384000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ (1/2)"
        },
        {
          "timestamp": 1525365413000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ (2/2)"
        },
        {
          "timestamp": 1525365779000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/405\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/146"
        },
        {
          "timestamp": 1525384770000,
          "reviewer": ids["dfarrell07"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1525384844000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\n(2 comments)"
        },
        {
          "timestamp": 1525384880000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ (1/2)"
        },
        {
          "timestamp": 1525384915000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ (2/2)"
        },
        {
          "timestamp": 1525384941000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
        },
        {
          "timestamp": 1525385059000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/407\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/147"
        },
        {
          "timestamp": 1525385096000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 2: Code-Review+2"
        },
        {
          "timestamp": 1525385121000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1:\n\n(1 comment)"
        },
        {
          "timestamp": 1525385719000,
          "reviewer": ids["dfarrell07"],
          "message": "Change has been successfully merged by Daniel Farrell"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "b36b320613a5aeef4d016f73e81c26802b83e0e0",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/97/10397/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1525362547000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1525365779000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-python-jobs.rst",
              "line": 79,
              "reviewer": ids["dfarrell07"],
              "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["dfarrell07"],
              "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["zxiiro"],
              "message": "Thanks for fixing this. Inheritance probably wasn\u0027t coming through properly via the common anchor.",
              "patchSetTimestamp": 1525362547000
            },
            {
              "file": "jjb/lf-python-jobs.yaml",
              "line": 132,
              "reviewer": ids["dfarrell07"],
              "message": "Np, merge it if you think the fix is okay Thanh",
              "patchSetTimestamp": 1525362547000
            }
          ],
          "sizeInsertions": 24,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "aa256b7a0769f6c9c9906cacb4d87f49e691622c",
          "parents": [
            "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
          ],
          "ref": "refs/changes/97/10397/2",
          "uploader": ids["dfarrell07"],
          "createdOnDate": 1525384770000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1525384941000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1525385059000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1525385096000,
              "grantedBy": ids["dfarrell07"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1525385719000,
              "grantedBy": ids["dfarrell07"]
            }
          ],
          "comments": [],
          "sizeInsertions": 26,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ifddf4463ac6afa2395be25cddf989fe05dd9fec1",
      "commitNumber": 9534,
      "subject": "Add link to release notes",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/9534",
      "commitMessage": "Add link to release notes\n\nIssue: RELENG-552\nChange-Id: Ifddf4463ac6afa2395be25cddf989fe05dd9fec1\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1521652284000,
      "lastUpdatedDate": 1521902752000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["askb"],
        ids["jwagantall"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"]
      ],
      "comments": [
        {
          "timestamp": 1521652284000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1521652388000,
          "reviewer": ids["zxiiro"],
          "message": "Assignee added: Jessica Wagantall \u003cjwagantall@linuxfoundation.org\u003e"
        },
        {
          "timestamp": 1521652397000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/101/ (1/2)"
        },
        {
          "timestamp": 1521652430000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/296/ (2/2)"
        },
        {
          "timestamp": 1521652600000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/101/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/101\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/296/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/296"
        },
        {
          "timestamp": 1521659472000,
          "reviewer": ids["jluhrsen"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1521779799000,
          "reviewer": ids["dfarrell07"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1521902730000,
          "reviewer": ids["askb"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1521902752000,
          "reviewer": ids["askb"],
          "message": "Change has been successfully merged by Anil Belur"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "3ea6a674e095bb64a4830c4bd2bb66e155a674b2",
          "parents": [
            "f75d04ed3780933fb82b31c596f579e482dd6d06"
          ],
          "ref": "refs/changes/34/9534/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1521652284000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521902730000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1521902752000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1521652600000,
              "grantedBy": ids["lf-jenkins"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1521779799000,
              "grantedBy": ids["dfarrell07"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1521659472000,
              "grantedBy": ids["jluhrsen"]
            }
          ],
          "comments": [],
          "sizeInsertions": 8,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I7d134950b25d469686cace2f79fd8c297727166c",
      "commitNumber": 8434,
      "subject": "Create job to manage Jenkins Global Variables",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/8434",
      "commitMessage": "Create job to manage Jenkins Global Variables\n\nParses a configuration file containing variable listings in the form\n\"KEY\u003dvalue\" one per line and creates the appropriate groovy\nscript to push these environment variables to Jenkins Global Config.\n\nConfiguration file is stored in\nci-management/jenkins-config/global-vars-SILO.sh\n\n(Where silo is production | sandbox)\n\nWhile JJB provided us a way to store job configuration in a git repo\nwe have never had a good way to manage global Jenkins configuration.\nThis patch enables us to manage one aspect, Global Environment\nvariables in the ci-management repository.\n\nIssue: RELENG-753\nChange-Id: I7d134950b25d469686cace2f79fd8c297727166c\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1516321577000,
      "lastUpdatedDate": 1518450858000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["jwagantall"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["dfarrell07"],
        ids["jluhrsen"],
        ids["cl778h"]
      ],
      "comments": [
        {
          "timestamp": 1516321577000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1518062029000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1518066002000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1518066033000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nSuccessfully tested with https://logs.opendaylight.org/sandbox/vex-yul-odl-jenkins-2/builder-jenkins-cfg-merge/19/"
        },
        {
          "timestamp": 1518066127000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ (1/2)"
        },
        {
          "timestamp": 1518066175000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/75/ (2/2)"
        },
        {
          "timestamp": 1518066311000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/238/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/238\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/75/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/75"
        },
        {
          "timestamp": 1518066705000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1518066803000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/239/ (1/2)"
        },
        {
          "timestamp": 1518066854000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/76/ (2/2)"
        },
        {
          "timestamp": 1518066992000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/239/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/239\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/76/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/76"
        },
        {
          "timestamp": 1518145719000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1518145842000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/243/ (1/2)"
        },
        {
          "timestamp": 1518145878000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/77/ (2/2)"
        },
        {
          "timestamp": 1518146056000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/243/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/243\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/77/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/77"
        },
        {
          "timestamp": 1518146172000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5: Code-Review-1\n\n(3 comments)"
        },
        {
          "timestamp": 1518147448000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1518147566000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/244/ (1/2)"
        },
        {
          "timestamp": 1518147613000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/78/ (2/2)"
        },
        {
          "timestamp": 1518147738000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/244/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/244\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/78/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/78"
        },
        {
          "timestamp": 1518147757000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review-1\n\n(2 comments)"
        },
        {
          "timestamp": 1518148001000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 7."
        },
        {
          "timestamp": 1518148107000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/245/ (1/2)"
        },
        {
          "timestamp": 1518148147000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/79/ (2/2)"
        },
        {
          "timestamp": 1518148326000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 7: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/245/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/245\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/79/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/79"
        },
        {
          "timestamp": 1518182253000,
          "reviewer": ids["cl778h"],
          "message": "Patch Set 7:\n\nWill every project with a ci-management/jjb area need to gain a jenkins-config/ subdirectory for this to succeed?"
        },
        {
          "timestamp": 1518184611000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n\u003e Will every project with a ci-management/jjb area need to gain a\n \u003e jenkins-config/ subdirectory for this to succeed?\n\nYes this will cause all projects to require a jenkins-config directory with a global-vars file defined for \u0027production\u0027 and \u0027sandbox\u0027 systems. (Unless they decide to exclude the job). This provides a very visible feature for the projects though so I don\u0027t really expect folks will want to do that and LF staff will need to fill out the initial details."
        },
        {
          "timestamp": 1518184696000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7: Code-Review-1\n\n(1 comment)"
        },
        {
          "timestamp": 1518449793000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 7:\n\n(1 comment)"
        },
        {
          "timestamp": 1518449914000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 8."
        },
        {
          "timestamp": 1518450117000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/246/ (1/2)"
        },
        {
          "timestamp": 1518450185000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/80/ (2/2)"
        },
        {
          "timestamp": 1518450801000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 8: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/246/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/246\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/80/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/80"
        },
        {
          "timestamp": 1518450841000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 8: Code-Review+2\n\nSuccessfully tested latest patch on Sandbox.\nhttps://logs.opendaylight.org/sandbox/vex-yul-odl-jenkins-2/builder-jenkins-cfg-merge/2/\n\nGoing to merge to get this into global-jjb v0.16.0 today."
        },
        {
          "timestamp": 1518450858000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "778507859a47e2536d83ae8a709bfec21b70b3f9",
          "parents": [
            "c1873360fa7455fdb690c6235923d7eb68e30ec6"
          ],
          "ref": "refs/changes/34/8434/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1516321577000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 153,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "127c4ef9f25fd72c9f8a72c3cb463082f1960376",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518062029000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 165,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "9ef0e2fcf3aa4280f6ecffbece09539ace36476f",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518066002000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1518066311000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 225,
          "sizeDeletions": 0
        },
        {
          "number": 4,
          "revision": "6eaf52ff75162bfd80d2511e13d31ab69662d3d0",
          "parents": [
            "b804ed77372c30845bdd360f4baa52de98028a30"
          ],
          "ref": "refs/changes/34/8434/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518066705000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518066992000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 227,
          "sizeDeletions": 0
        },
        {
          "number": 5,
          "revision": "9e16156cb489a8ba3fa3da8bc9c15c4ad30f23b4",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518145719000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518146172000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518146056000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": ".jjb-test/lf-ci-jobs.yaml",
              "line": 9,
              "reviewer": ids["zxiiro"],
              "message": "Not sure we need this the job should define a default.",
              "patchSetTimestamp": 1518145719000
            },
            {
              "file": ".jjb-test/lf-ci-jobs.yaml",
              "line": 17,
              "reviewer": ids["zxiiro"],
              "message": "same here.",
              "patchSetTimestamp": 1518145719000
            },
            {
              "file": "jjb/lf-ci-jobs.yaml",
              "line": 274,
              "reviewer": ids["zxiiro"],
              "message": "need a default branch defined.",
              "patchSetTimestamp": 1518145719000
            }
          ],
          "sizeInsertions": 227,
          "sizeDeletions": 0
        },
        {
          "number": 6,
          "revision": "713cd5f10d1d67d62fd8c6b28ac03b327d8c427b",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518147448000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518147757000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518147738000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 10,
              "reviewer": ids["zxiiro"],
              "message": "Should document that this script requires lftools to be preinstalled to /tmp/v/lftools.",
              "patchSetTimestamp": 1518147448000
            },
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 15,
              "reviewer": ids["zxiiro"],
              "message": "Don\u0027t need this line of code as this script is already assuming that this directory exists. Plus if it didn\u0027t we made not effort to actually install lftools after this...",
              "patchSetTimestamp": 1518147448000
            }
          ],
          "sizeInsertions": 257,
          "sizeDeletions": 0
        },
        {
          "number": 7,
          "revision": "3e3cae6c6a31cad29eb214112feb3d3bcdde9174",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/34/8434/7",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518148001000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518184696000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518148326000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 50,
              "reviewer": ids["zxiiro"],
              "message": "Need to check if a user puts a space in the file will it be ignored or cause this to fail?\n\n\nAlso we should support comments (lines starting with #) as I suspect folks may want to add comments to the file.",
              "patchSetTimestamp": 1518148001000
            },
            {
              "file": "shell/jenkins-configure-global-vars.sh",
              "line": 50,
              "reviewer": ids["zxiiro"],
              "message": "if [[ $var \u003d\u003d \u0027#\u0027* ]] || [ -z \"$var\" ]; then\n        continue\n    fi",
              "patchSetTimestamp": 1518148001000
            }
          ],
          "sizeInsertions": 264,
          "sizeDeletions": 0
        },
        {
          "number": 8,
          "revision": "1d1aaf33f079ee4f51dfce68e8f5592a649947ca",
          "parents": [
            "757650c835599c0aa4fe62ed99f05eab324c6f37"
          ],
          "ref": "refs/changes/34/8434/8",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1518449914000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1518450841000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1518450858000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518450801000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 269,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 4,
        "approvalCount": 3,
        "commentCount": 3,
        "approvals": {
          "1": 1,
          "2": 2
        }
      }
    },
    {
      "identity": ids["mardim"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "commentsWritten": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "If54f43eb3f66d0c6b493495a82a65989fc7ed6c3",
        "commitNumber": 10397,
        "subject": "Add override for GT file-paths in Python jobs",
        "owner": ids["zxiiro"],
        "url": "https://gerrit.linuxfoundation.org/infra/10397",
        "commitMessage": "Add override for GT file-paths in Python jobs\n\nSome projects may have small Python sub-projects within their\nrepos. This would allow them to only trigger builds when there\nis a change in the relevant directory.\n\nChange-Id: If54f43eb3f66d0c6b493495a82a65989fc7ed6c3\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
        "createdOnDate": 1525362547000,
        "lastUpdatedDate": 1525385719000,
        "isOpen": false,
        "status": "MERGED",
        "reviewers": [
          ids["shague"],
          ids["lf-jenkins"],
          ids["dfarrell07"],
          ids["zxiiro"]
        ],
        "comments": [
          {
            "timestamp": 1525362547000,
            "reviewer": ids["zxiiro"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1525365384000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ (1/2)"
          },
          {
            "timestamp": 1525365413000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ (2/2)"
          },
          {
            "timestamp": 1525365779000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/405/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/405\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/146/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/146"
          },
          {
            "timestamp": 1525384770000,
            "reviewer": ids["dfarrell07"],
            "message": "Uploaded patch set 2."
          },
          {
            "timestamp": 1525384844000,
            "reviewer": ids["dfarrell07"],
            "message": "Patch Set 1:\n\n(2 comments)"
          },
          {
            "timestamp": 1525384880000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ (1/2)"
          },
          {
            "timestamp": 1525384915000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ (2/2)"
          },
          {
            "timestamp": 1525384941000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 2: Code-Review+1\n\n(1 comment)"
          },
          {
            "timestamp": 1525385059000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 2: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/407/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/407\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/147/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/147"
          },
          {
            "timestamp": 1525385096000,
            "reviewer": ids["dfarrell07"],
            "message": "Patch Set 2: Code-Review+2"
          },
          {
            "timestamp": 1525385121000,
            "reviewer": ids["dfarrell07"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1525385719000,
            "reviewer": ids["dfarrell07"],
            "message": "Change has been successfully merged by Daniel Farrell"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "b36b320613a5aeef4d016f73e81c26802b83e0e0",
            "parents": [
              "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
            ],
            "ref": "refs/changes/97/10397/1",
            "uploader": ids["zxiiro"],
            "createdOnDate": 1525362547000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Verified",
                "description": "Verified",
                "value": -1,
                "grantedOnDate": 1525365779000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "docs/jjb/lf-python-jobs.rst",
                "line": 79,
                "reviewer": ids["dfarrell07"],
                "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
                "patchSetTimestamp": 1525362547000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 132,
                "reviewer": ids["dfarrell07"],
                "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
                "patchSetTimestamp": 1525362547000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 132,
                "reviewer": ids["zxiiro"],
                "message": "Thanks for fixing this. Inheritance probably wasn\u0027t coming through properly via the common anchor.",
                "patchSetTimestamp": 1525362547000
              },
              {
                "file": "jjb/lf-python-jobs.yaml",
                "line": 132,
                "reviewer": ids["dfarrell07"],
                "message": "Np, merge it if you think the fix is okay Thanh",
                "patchSetTimestamp": 1525362547000
              }
            ],
            "sizeInsertions": 24,
            "sizeDeletions": 0
          },
          {
            "number": 2,
            "revision": "aa256b7a0769f6c9c9906cacb4d87f49e691622c",
            "parents": [
              "68bfb0c6bd7ba0c23e665ba4045acbba0e26af02"
            ],
            "ref": "refs/changes/97/10397/2",
            "uploader": ids["dfarrell07"],
            "createdOnDate": 1525384770000,
            "author": ids["zxiiro"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 1,
                "grantedOnDate": 1525384941000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1525385059000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": 2,
                "grantedOnDate": 1525385096000,
                "grantedBy": ids["dfarrell07"]
              },
              {
                "type": "SUBM",
                "description": "",
                "value": 1,
                "grantedOnDate": 1525385719000,
                "grantedBy": ids["dfarrell07"]
              }
            ],
            "comments": [],
            "sizeInsertions": 26,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "docs/jjb/lf-python-jobs.rst",
          "line": 79,
          "reviewer": ids["dfarrell07"],
          "message": "Grammar check doesn\u0027t like this, fixed 3x in next patchset",
          "patchSetTimestamp": 1525362547000
        },
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 132,
          "reviewer": ids["dfarrell07"],
          "message": "jenkins_jobs.errors.JenkinsJobsException: obj parameter missing to format {obj:gerrit_trigger_file_paths}\n\nNot sure how to fix that properly but I made it work in next patchset",
          "patchSetTimestamp": 1525362547000
        },
        {
          "file": "jjb/lf-python-jobs.yaml",
          "line": 132,
          "reviewer": ids["dfarrell07"],
          "message": "Np, merge it if you think the fix is okay Thanh",
          "patchSetTimestamp": 1525362547000
        }
      ]
    }
  ],
  "commentsReceived": [
    {
      "commit": {
        "project": "releng/global-jjb",
        "branch": "master",
        "id": "I942726a626622ee16e5b9a9366f7fe552b144314",
        "commitNumber": 10732,
        "subject": "Add OpenCI event emit job, builder",
        "owner": ids["dfarrell07"],
        "url": "https://gerrit.linuxfoundation.org/infra/10732",
        "commitMessage": "Add OpenCI event emit job, builder\n\nEarly prototype for cross-project, event-driven CI effort under OpenCI,\nbetween ODL, OPNFV and others.\n\nEmit script copied from Fatih in:\n\nhttps://git.opendaylight.org/gerrit/#/c/72096/\n\nChange-Id: I942726a626622ee16e5b9a9366f7fe552b144314\nSigned-off-by: Daniel Farrell \u003cdfarrell@redhat.com\u003e\n",
        "createdOnDate": 1526930665000,
        "lastUpdatedDate": 1527864802000,
        "isOpen": true,
        "status": "NEW",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"],
          ids["fdegir"],
          ids["yrobla"]
        ],
        "comments": [
          {
            "timestamp": 1526930665000,
            "reviewer": ids["dfarrell07"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1526930842000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/"
          },
          {
            "timestamp": 1526931046000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/449/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/449"
          },
          {
            "timestamp": 1527842354000,
            "reviewer": ids["fdegir"],
            "message": "Patch Set 1:\n\n(1 comment)"
          },
          {
            "timestamp": 1527842668000,
            "reviewer": ids["yrobla"],
            "message": "Patch Set 1: Code-Review-1\n\n(1 comment)"
          },
          {
            "timestamp": 1527864802000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\n(3 comments)"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "69fc6ccbb7ac01d21452036ece81b1af121b171e",
            "parents": [
              "9b240453b91f3c4b0844ea1c593721a1c421caa2"
            ],
            "ref": "refs/changes/32/10732/1",
            "uploader": ids["dfarrell07"],
            "createdOnDate": 1526930665000,
            "author": ids["dfarrell07"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527864802000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1526931046000,
                "grantedBy": ids["lf-jenkins"]
              },
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1527842668000,
                "grantedBy": ids["yrobla"]
              }
            ],
            "comments": [
              {
                "file": "jjb/openci-jobs.yaml",
                "line": 48,
                "reviewer": ids["zxiiro"],
                "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 1,
                "reviewer": ids["fdegir"],
                "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 4,
                "reviewer": ids["zxiiro"],
                "message": "2018",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 11,
                "reviewer": ids["zxiiro"],
                "message": "We should probably `set -e` too",
                "patchSetTimestamp": 1526930665000
              },
              {
                "file": "shell/openci-emit-ape.sh",
                "line": 26,
                "reviewer": ids["yrobla"],
                "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
                "patchSetTimestamp": 1526930665000
              }
            ],
            "sizeInsertions": 125,
            "sizeDeletions": 0
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "jjb/openci-jobs.yaml",
          "line": 48,
          "reviewer": ids["zxiiro"],
          "message": "Since global-jjb needs to support GitHub as well we need to also have a GitHub based template. Look at one of the maven verify jobs and copy the GitHub section they all mostly look quite similar.",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 1,
          "reviewer": ids["fdegir"],
          "message": "this script does not emit the event but just generates the event body for the prototype.\n\nYolanda has been working on a utility to emit events which can be incorporated into this script.\n\nBtw, we are looking into message spec since we got some info from CNCF guys which we will use while working on the message spec.",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 4,
          "reviewer": ids["zxiiro"],
          "message": "2018",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 11,
          "reviewer": ids["zxiiro"],
          "message": "We should probably `set -e` too",
          "patchSetTimestamp": 1526930665000
        },
        {
          "file": "shell/openci-emit-ape.sh",
          "line": 26,
          "reviewer": ids["yrobla"],
          "message": "i need that to be quoted, otherwise my code rejects for invalid JSON:\n\n\u0027confidenceLevel\u0027: \"{ $CONFIDENCE_LEVEL }\"",
          "patchSetTimestamp": 1526930665000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["fdegir"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 0,
        "commentCount": 1,
        "approvals": {}
      }
    },
    {
      "identity": ids["yrobla"],
      "approvalData": {
        "addedAsReviewerCount": 1,
        "approvalCount": 1,
        "commentCount": 1,
        "approvals": {
          "-1": 1
        }
      }
    },
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 3,
        "commentCount": 3,
        "approvals": {
          "-1": 2,
          "2": 1
        }
      }
    },
    {
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 0,
        "commentCount": 0,
        "approvals": {}
      }
    }
  ],
  "repositories": {
    "releng/global-jjb": {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    }
  },
  "averageTimeInCodeReview": 751000,
  "abandonedCommitCount": 1,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [
        {
          "identity": ids["zxiiro"],
          "approvalData": {
            "addedAsReviewerCount": 0,
            "approvalCount": 0,
            "commentCount": 3,
            "approvals": {}
          }
        }
      ],
      "commitCountForUser": 3
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 1
};