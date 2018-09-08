userdata['odl-jobbuilder'] = {
  "identity": ids["odl-jobbuilder"],
  "reviewCountPlus2": 0,
  "reviewCountPlus1": 0,
  "reviewCountMinus1": 2,
  "reviewCountMinus2": 0,
  "firstActiveDate": 1534555124000,
  "lastActiveDate": 1534555124000,
  "activeDayCount": 1,
  "commits": [],
  "addedAsReviewerTo": [
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "If0dda88ff24da7fd171484c37855f33b05f36553",
      "commitNumber": 12293,
      "subject": "Add job to verify upstream global-jjb patches",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12293",
      "commitMessage": "Add job to verify upstream global-jjb patches\n\nAdd job that can be used by downstream projects to report upstream\nto global-jjb patches when a proposed patch breaks their project.\n\nThis job sets -1 CR only and does not block the upstream patch as\nthere are cases where we may want to break backwards compatibility\non purpose. This job\u0027s purpose is to give us a clear view when it\ndoes happen.\n\nChange-Id: If0dda88ff24da7fd171484c37855f33b05f36553\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534465557000,
      "lastUpdatedDate": 1534781948000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["odl-jobbuilder"],
        ids["agrimberg"]
      ],
      "comments": [
        {
          "timestamp": 1534465557000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534553237000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534553316000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ (1/2)"
        },
        {
          "timestamp": 1534553325000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ (2/2)"
        },
        {
          "timestamp": 1534553486000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/1/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/1\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/699/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/699"
        },
        {
          "timestamp": 1534553503000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534553589000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ (1/2)"
        },
        {
          "timestamp": 1534553591000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ (2/2)"
        },
        {
          "timestamp": 1534553740000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/2/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/2\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/700/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/700"
        },
        {
          "timestamp": 1534554081000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534554110000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ (1/2)"
        },
        {
          "timestamp": 1534554245000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ (2/2)"
        },
        {
          "timestamp": 1534554284000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Code-Review-1 Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/3/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/3\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/701/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/701"
        },
        {
          "timestamp": 1534554885000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534554956000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: -Code-Review -Verified\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ (1/2)"
        },
        {
          "timestamp": 1534554965000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ (2/2)"
        },
        {
          "timestamp": 1534555124000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1: Code-Review-1 Verified-1\n\nBuild Failed \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/4/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/4\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ : FAILURE\n\nNo problems were identified. If you know why this problem occurred, please add a suitable Cause for it. ( https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/702/ )\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/702"
        },
        {
          "timestamp": 1534555229000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 2."
        },
        {
          "timestamp": 1534555296000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/5/ (1/3)"
        },
        {
          "timestamp": 1534555305000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/298/ (2/3)"
        },
        {
          "timestamp": 1534555365000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 2:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/703/ (3/3)"
        },
        {
          "timestamp": 1534556283000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 2:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/5/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/5\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/298/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/298\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/703/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/703"
        },
        {
          "timestamp": 1534556537000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 2:\n\nODL Jenkins needs permissions to vote I think."
        },
        {
          "timestamp": 1534556751000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 3."
        },
        {
          "timestamp": 1534556824000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/301/ (1/3)"
        },
        {
          "timestamp": 1534556880000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/706/ (2/3)"
        },
        {
          "timestamp": 1534556968000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/8/ (3/3)"
        },
        {
          "timestamp": 1534558179000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/301/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/301\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/706/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/706\n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/8/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/8"
        },
        {
          "timestamp": 1534558796000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\nrecheck"
        },
        {
          "timestamp": 1534558935000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/304/ (1/2)"
        },
        {
          "timestamp": 1534558949000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/710/ (2/2)"
        },
        {
          "timestamp": 1534559090000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 3: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/304/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/304\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/710/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/710"
        },
        {
          "timestamp": 1534606008000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3: Code-Review+1"
        },
        {
          "timestamp": 1534779247000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1534781737000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 3:\n\n(1 comment)"
        },
        {
          "timestamp": 1534781947000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 3: Code-Review+2"
        },
        {
          "timestamp": 1534781948000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5a7ace954ffa0734c4ce060f535f355d16df9e45",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/93/12293/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534465557000,
          "author": ids["zxiiro"],
          "isDraft": true,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": -1,
              "grantedOnDate": 1534555124000,
              "grantedBy": ids["odl-jobbuilder"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": -1,
              "grantedOnDate": 1534555124000,
              "grantedBy": ids["odl-jobbuilder"]
            }
          ],
          "comments": [],
          "sizeInsertions": 70,
          "sizeDeletions": 0
        },
        {
          "number": 2,
          "revision": "7b745a6b694b52eb54afc6730917a381b3bcdf8c",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/93/12293/2",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534555229000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [],
          "comments": [],
          "sizeInsertions": 107,
          "sizeDeletions": 0
        },
        {
          "number": 3,
          "revision": "e9a058af2478d5b0927429955022b1a56aef9fdd",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/93/12293/3",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534556751000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534781947000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534781948000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534606008000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559090000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 461,
              "reviewer": ids["agrimberg"],
              "message": "I\u0027m assuming that there is no github version of this because global-jjb is purely a Gerrit based project and all the downstreams will have to be watching the Gerrit stream on the LF Gerrit?",
              "patchSetTimestamp": 1534556751000
            },
            {
              "file": "docs/jjb/lf-ci-jobs.rst",
              "line": 461,
              "reviewer": ids["zxiiro"],
              "message": "Yeah I didn\u0027t want to force non-Gerrit projects to suddenly require Gerrit Trigger. If someone requests it we could add it in the future however I think we\u0027ll get good enough coverage by monitoring our Gerrit based projects at least.",
              "patchSetTimestamp": 1534556751000
            }
          ],
          "sizeInsertions": 107,
          "sizeDeletions": 0
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "I8c606002bc4ca187b56514d65aa39919a6c6e74b",
      "commitNumber": 12309,
      "subject": "Remove mvn-settings requirement from jjb job docs",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12309",
      "commitMessage": "Remove mvn-settings requirement from jjb job docs\n\nThese jobs do not use that setting.\n\nChange-Id: I8c606002bc4ca187b56514d65aa39919a6c6e74b\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534556287000,
      "lastUpdatedDate": 1534779413000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["odl-jobbuilder"]
      ],
      "comments": [
        {
          "timestamp": 1534556287000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534556370000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/6/ (1/3)"
        },
        {
          "timestamp": 1534556416000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/299/ (2/3)"
        },
        {
          "timestamp": 1534556505000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/704/ (3/3)"
        },
        {
          "timestamp": 1534557562000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/6/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/6\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/299/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/299\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/704/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/704"
        },
        {
          "timestamp": 1534558812000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534558984000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/306/ (1/2)"
        },
        {
          "timestamp": 1534559003000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/713/ (2/2)"
        },
        {
          "timestamp": 1534559152000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/306/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/306\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/713/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/713"
        },
        {
          "timestamp": 1534606000000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534779412000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534779413000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "5ead957979aff73609c8167182d09f699ffa206e",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/09/12309/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534556287000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534779412000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534779413000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534606000000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559152000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 0,
          "sizeDeletions": -4
        }
      ]
    },
    {
      "project": "releng/global-jjb",
      "branch": "master",
      "id": "Ia07cb6b437e6e2107b8301d52f72aa3cace112da",
      "commitNumber": 12310,
      "subject": "Document the jjb-version variable",
      "owner": ids["zxiiro"],
      "url": "https://gerrit.linuxfoundation.org/infra/12310",
      "commitMessage": "Document the jjb-version variable\n\nChange-Id: Ia07cb6b437e6e2107b8301d52f72aa3cace112da\nSigned-off-by: Thanh Ha \u003cthanh.ha@linuxfoundation.org\u003e\n",
      "createdOnDate": 1534556409000,
      "lastUpdatedDate": 1534778310000,
      "isOpen": false,
      "status": "MERGED",
      "reviewers": [
        ids["agrimberg"],
        ids["zxiiro"],
        ids["lf-jenkins"],
        ids["odl-jobbuilder"]
      ],
      "comments": [
        {
          "timestamp": 1534556409000,
          "reviewer": ids["zxiiro"],
          "message": "Uploaded patch set 1."
        },
        {
          "timestamp": 1534556565000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/300/ (1/3)"
        },
        {
          "timestamp": 1534556598000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/7/ (2/3)"
        },
        {
          "timestamp": 1534556601000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/705/ (3/3)"
        },
        {
          "timestamp": 1534557667000,
          "reviewer": ids["odl-jobbuilder"],
          "message": "Patch Set 1:\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/builder-jjb-verify-upstream-gjjb/7/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/builder-jjb-verify-upstream-gjjb/7\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/300/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/300\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/705/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/705"
        },
        {
          "timestamp": 1534558807000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1:\n\nrecheck"
        },
        {
          "timestamp": 1534558969000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/305/ (1/2)"
        },
        {
          "timestamp": 1534558981000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1:\n\nBuild Started https://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/712/ (2/2)"
        },
        {
          "timestamp": 1534559135000,
          "reviewer": ids["lf-jenkins"],
          "message": "Patch Set 1: Verified+1\n\nBuild Successful \n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-rtd-verify-any/305/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-rtd-verify-any/305\n\nhttps://jenkins.opendaylight.org/releng/job/lf-infra-global-jjb-tox-verify-any/712/ : SUCCESS\n\nLogs: https://logs.opendaylight.org/releng/vex-yul-odl-jenkins-1/lf-infra-global-jjb-tox-verify-any/712"
        },
        {
          "timestamp": 1534605994000,
          "reviewer": ids["zxiiro"],
          "message": "Patch Set 1: Code-Review+1"
        },
        {
          "timestamp": 1534778309000,
          "reviewer": ids["agrimberg"],
          "message": "Patch Set 1: Code-Review+2"
        },
        {
          "timestamp": 1534778310000,
          "reviewer": ids["agrimberg"],
          "message": "Change has been successfully merged by Andrew Grimberg"
        }
      ],
      "patchSets": [
        {
          "number": 1,
          "revision": "7255eaaa4f73e7867f0a64199b5b45cb92e8fbfc",
          "parents": [
            "75cd5909da184179c77a55d1909f7159d9eea34b"
          ],
          "ref": "refs/changes/10/12310/1",
          "uploader": ids["zxiiro"],
          "createdOnDate": 1534556409000,
          "author": ids["zxiiro"],
          "isDraft": false,
          "kind": "REWORK",
          "approvals": [
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 2,
              "grantedOnDate": 1534778309000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "SUBM",
              "description": "",
              "value": 1,
              "grantedOnDate": 1534778310000,
              "grantedBy": ids["agrimberg"]
            },
            {
              "type": "Code-Review",
              "description": "Code-Review",
              "value": 1,
              "grantedOnDate": 1534605994000,
              "grantedBy": ids["zxiiro"]
            },
            {
              "type": "Verified",
              "description": "Verified",
              "value": 1,
              "grantedOnDate": 1534559135000,
              "grantedBy": ids["lf-jenkins"]
            }
          ],
          "comments": [],
          "sizeInsertions": 2,
          "sizeDeletions": 0
        }
      ]
    }
  ],
  "reviewRequestors": [
    {
      "identity": ids["zxiiro"],
      "approvalData": {
        "addedAsReviewerCount": 3,
        "approvalCount": 2,
        "commentCount": 0,
        "approvals": {
          "-1": 2
        }
      }
    }
  ],
  "commentsWritten": [],
  "commentsReceived": [],
  "reviewersForOwnCommits": [],
  "repositories": {},
  "averageTimeInCodeReview": 0,
  "abandonedCommitCount": 0,
  "projects": [],
  "selfReviewedCommitCount": 0,
  "inReviewCommitCount": 0
};