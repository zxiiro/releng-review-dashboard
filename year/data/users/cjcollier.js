userdata['cjcollier'] = {
  "identity": ids["cjcollier"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 0,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1518144742000,
  "lastActiveDate": 1522267890000,
  "activeDayCount": 2,
  "commits": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I050e0c43f5f0b5d8b7c1bbb763c9992ba4838049",
      "commitNumber": 8779,
      "subject": "Allow failure when NEXUS_URL is zero-length",
      "owner": ids["cjcollier"],
      "url": "https://gerrit.linuxfoundation.org/infra/8779",
      "commitMessage": "Allow failure when NEXUS_URL is zero-length\n\nSome releng environments do not use Nexus and will not need an netrc\nsetup\n\nChange-Id: I050e0c43f5f0b5d8b7c1bbb763c9992ba4838049\nSigned-off-by: C.J. Collier \u003ccjcollier@linuxfoundation.org\u003e\n",
      "createdOnDate": 1518144742000,
      "lastUpdatedDate": 1522267890000,
      "isOpen": false,
      "status": "ABANDONED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"]
      ],
      "comments": [
        {
          "timestamp": 1518144742000,
          "reviewer": ids["cjcollier"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1518144763000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/242/"
        },
        {
          "timestamp": 1518144959000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/242/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/242"
        },
        {
          "timestamp": 1518145258000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\n(1 comment)\n\nI\u0027d like to understand what\u0027s causing the break here. This is specific for Maven things pushing objects to Nexus. If you\u0027re not using a Maven job this should not affect you?"
        },
        {
          "timestamp": 1518198373000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review-1\n\nAh we also use this for logs. This is probably what\u0027s causing the failure for you. You have a system that does not have a Nexus backed logging server. We don\u0027t want to quietly ignore this though as we need to to throw a failure so that we know logs isn\u0027t working.\n\nI think maybe the real solution here is to provide a way to deactivate logging for projects that don\u0027t need it.\n\nDoes this make sense?"
        },
        {
          "timestamp": 1522267890000,
          "reviewer": ids["cjcollier"],
          "message": "Abandoned"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "d3e49232f3f29d05117868a2975baacbe641afc5",
          "parents": [
            "c4295ab63bdbbceb6647b86ae27732364c2bce26"
          ],
          "ref": "refs/changes/79/8779/1",
          "uploader": ids["cjcollier"],
          "createdOnDate": 1518144742000,
          "author": ids["cjcollier"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1518198373000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1518144959000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "shell/create-netrc.sh",
              "line": 20,
              "reviewer": ids["zxiiro"],
              "message": "I think simply having the following is sufficient:\n\n if [ -z \"$NEXUS_URL\" ]; then\n     echo \"WARN: NEXUS_URL not defined.\n     exit 0\n fi",
              "patchSetTimestamp": 1518144742000
            }
          ],
          "sizeInsertions": 9,
          "sizeDeletions": -3
        }
      ]
    }
  ],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I6551e14f934a904378771262d1491cb5b3df5854",
      "commitNumber": 6896,
      "subject": "Migrate Global JJB docs to RST",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/6896",
      "commitMessage": "Migrate Global JJB docs to RST\n\nThis moves Global JJB documentation into RST docs and adds a\nnew checker which parses YAML files for items that are missing\ndocumentation to ensure that every new template addition comes with\nsupporting documentation.\n\nTried to update documentation where it made sense too but we should\nprobably go back later and review all the items to make sure they are\nall sufficiently documented. Especially macros which in many places are\nlacking in required parameter documentation.\n\nChange-Id: I6551e14f934a904378771262d1491cb5b3df5854\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1508100327000,
      "lastUpdatedDate": 1508532212000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["lf-jenkins"],
        ids["zxiiro"],
        ids["cjcollier"],
        ids["jeremyphelps"],
        ids["askb"]
      ],
      "comments": [
        {
          "timestamp": 1508100327000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1508100372000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/474/ (1/2)"
        },
        {
          "timestamp": 1508100459000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-master/10/ (2/2)"
        },
        {
          "timestamp": 1508100563000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/474/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/474/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/474\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-master/10/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-rtd-verify-master/10"
        },
        {
          "timestamp": 1508122216000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1508122258000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/476/ (1/2)"
        },
        {
          "timestamp": 1508122342000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-master/12/ (2/2)"
        },
        {
          "timestamp": 1508122454000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/476/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-master/476/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-master/476\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-master/12/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-rtd-verify-master/12"
        },
        {
          "timestamp": 1508187924000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1508270311000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1508270360000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/5/ (1/2)"
        },
        {
          "timestamp": 1508270393000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/16/ (2/2)"
        },
        {
          "timestamp": 1508270592000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/16/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/16/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-any/16\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/5/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-rtd-verify-any/5"
        },
        {
          "timestamp": 1508274863000,
          "reviewer": ids["cjcollier"],
          "message": "Patch Set 3:\n\nI\u0027m a bit concerned that the inline docs are being removed.\n\nIf there\u0027s a strong correlation between the files under jjb and the files under docs/jjb, the relation should be explained in the README, especially if the relations are being verified by a test script, which they should be."
        },
        {
          "timestamp": 1508349436000,
          "reviewer": ids["jeremyphelps"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1508371463000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 4."
        },
        {
          "timestamp": 1508371472000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/6/ (1/2)"
        },
        {
          "timestamp": 1508371640000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/20/ (2/2)"
        },
        {
          "timestamp": 1508371814000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 4: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/6/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-rtd-verify-any/6\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/20/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-any/20"
        },
        {
          "timestamp": 1508378522000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 5."
        },
        {
          "timestamp": 1508381482000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 5:\n\nrecheck"
        },
        {
          "timestamp": 1508381528000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/7/ (1/2)"
        },
        {
          "timestamp": 1508381558000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/21/ (2/2)"
        },
        {
          "timestamp": 1508381754000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 5: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/21/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/21/ )\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-any/21\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/7/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-rtd-verify-any/7"
        },
        {
          "timestamp": 1508386315000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 6."
        },
        {
          "timestamp": 1508386369000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/8/ (1/2)"
        },
        {
          "timestamp": 1508386401000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/22/ (2/2)"
        },
        {
          "timestamp": 1508386578000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 6: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/8/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-rtd-verify-any/8\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/22/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/jenkins092/lf-infra-global-jjb-tox-verify-any/22"
        },
        {
          "timestamp": 1508457620000,
          "reviewer": ids["askb"],
          "message": "Patch Set 6: Code-Review+1"
        },
        {
          "timestamp": 1508532210000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 6: Code-Review+2\n\nLet\u0027s merge this so that it get\u0027s pushed out and tweak as necessary. In later patches."
        },
        {
          "timestamp": 1508532212000,
          "reviewer": ids["zxiiro"],
          "message": "Change has been successfully merged by Thanh Ha"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "eaf79933d787170b81218ff99b1b9b63e48da975",
          "parents": [
            "c2494ace391aec04f864667454ce8573cc39ad3b"
          ],
          "ref": "refs/changes/96/6896/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1508100327000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508100563000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 89,
          "sizeDeletions": -13
        },
        {
          "number": 2,
          "revision": "751e1b620aa04d52c376f4601530821c1e88d47d",
          "parents": [
            "23439aa19a33555114efea80bbe1654be9840f32"
          ],
          "ref": "refs/changes/96/6896/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1508122216000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508122454000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 194,
          "sizeDeletions": -61
        },
        {
          "number": 3,
          "revision": "31f7b64afd8052e73d59781fb0f90c2d4b3a0d11",
          "parents": [
            "0555e7cedb757dccee40bcdf2c9aaf6deb278d66"
          ],
          "ref": "refs/changes/96/6896/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1508187924000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1508349436000,
              "grantedBy": ids["jeremyphelps"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508270592000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 441,
          "sizeDeletions": -210
        },
        {
          "number": 4,
          "revision": "97f3109a64dffae26ce0b4aa91fd4ca04da36c27",
          "parents": [
            "8d441550db2c781a25894896d46edf06e5bbfd67"
          ],
          "ref": "refs/changes/96/6896/4",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1508371463000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1508371814000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1149,
          "sizeDeletions": -544
        },
        {
          "number": 5,
          "revision": "ad6c20e8dc729b3d5d4b17855a9a2bbc85a9f7db",
          "parents": [
            "8d441550db2c781a25894896d46edf06e5bbfd67"
          ],
          "ref": "refs/changes/96/6896/5",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1508378522000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1508381754000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1380,
          "sizeDeletions": -544
        },
        {
          "number": 6,
          "revision": "391e8138f528a720604ed9da7bda949b5e56fbec",
          "parents": [
            "8d441550db2c781a25894896d46edf06e5bbfd67"
          ],
          "ref": "refs/changes/96/6896/6",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1508386315000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1508532210000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1508532212000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1508457620000,
              "grantedBy": ids["askb"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1508386578000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 1149,
          "sizeDeletions": -544
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
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
        "id": "I050e0c43f5f0b5d8b7c1bbb763c9992ba4838049",
        "commitNumber": 8779,
        "subject": "Allow failure when NEXUS_URL is zero-length",
        "owner": ids["cjcollier"],
        "url": "https://gerrit.linuxfoundation.org/infra/8779",
        "commitMessage": "Allow failure when NEXUS_URL is zero-length\n\nSome releng environments do not use Nexus and will not need an netrc\nsetup\n\nChange-Id: I050e0c43f5f0b5d8b7c1bbb763c9992ba4838049\nSigned-off-by: C.J. Collier \u003ccjcollier@linuxfoundation.org\u003e\n",
        "createdOnDate": 1518144742000,
        "lastUpdatedDate": 1522267890000,
        "isOpen": false,
        "status": "ABANDONED",
        "reviewers": [
          ids["zxiiro"],
          ids["lf-jenkins"]
        ],
        "comments": [
          {
            "timestamp": 1518144742000,
            "reviewer": ids["cjcollier"],
            "message": "Uploaded patch set 1."
          },
          {
            "timestamp": 1518144763000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/242/"
          },
          {
            "timestamp": 1518144959000,
            "reviewer": ids["lf-jenkins"],
            "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/242/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/242"
          },
          {
            "timestamp": 1518145258000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1:\n\n(1 comment)\n\nI\u0027d like to understand what\u0027s causing the break here. This is specific for Maven things pushing objects to Nexus. If you\u0027re not using a Maven job this should not affect you?"
          },
          {
            "timestamp": 1518198373000,
            "reviewer": ids["zxiiro"],
            "message": "Patch Set 1: Code-Review-1\n\nAh we also use this for logs. This is probably what\u0027s causing the failure for you. You have a system that does not have a Nexus backed logging server. We don\u0027t want to quietly ignore this though as we need to to throw a failure so that we know logs isn\u0027t working.\n\nI think maybe the real solution here is to provide a way to deactivate logging for projects that don\u0027t need it.\n\nDoes this make sense?"
          },
          {
            "timestamp": 1522267890000,
            "reviewer": ids["cjcollier"],
            "message": "Abandoned"
          }
        ],
        "patchSets": [
          {
            "number": 1,
            "revision": "d3e49232f3f29d05117868a2975baacbe641afc5",
            "parents": [
              "c4295ab63bdbbceb6647b86ae27732364c2bce26"
            ],
            "ref": "refs/changes/79/8779/1",
            "uploader": ids["cjcollier"],
            "createdOnDate": 1518144742000,
            "author": ids["cjcollier"],
            "isDraft": false,
            "kind": "REWORK",
            "approvals": [
              {
                "type": "Code-Review",
                "description": "Code-Review",
                "value": -1,
                "grantedOnDate": 1518198373000,
                "grantedBy": ids["zxiiro"]
              },
              {
                "type": "Verified",
                "description": "Verified",
                "value": 1,
                "grantedOnDate": 1518144959000,
                "grantedBy": ids["lf-jenkins"]
              }
            ],
            "comments": [
              {
                "file": "shell/create-netrc.sh",
                "line": 20,
                "reviewer": ids["zxiiro"],
                "message": "I think simply having the following is sufficient:\n\n if [ -z \"$NEXUS_URL\" ]; then\n     echo \"WARN: NEXUS_URL not defined.\n     exit 0\n fi",
                "patchSetTimestamp": 1518144742000
              }
            ],
            "sizeInsertions": 9,
            "sizeDeletions": -3
          }
        ]
      },
      "commentsByUser": [
        {
          "file": "shell/create-netrc.sh",
          "line": 20,
          "reviewer": ids["zxiiro"],
          "message": "I think simply having the following is sufficient:\n\n if [ -z \"$NEXUS_URL\" ]; then\n     echo \"WARN: NEXUS_URL not defined.\n     exit 0\n fi",
          "patchSetTimestamp": 1518144742000
        }
      ]
    }
  ],
  "reviewersForOwnCommits": [
    {
      "identity": ids["zxiiro"],
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
      "identity": ids["lf-jenkins"],
      "approvalData": {
        "addedAsReviewerCount": 1,
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
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  },
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 1,
  "projects": [
    {
      "name": "releng/global-jjb",
      "url": "https://gerrit.linuxfoundation.org/infra/#/q/project:releng/global-jjb",
      "reviewRequestors": [],
      "commitCountForUser": 1
    }
  ],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};